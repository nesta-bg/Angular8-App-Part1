import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { retry, catchError, retryWhen, delay, take, mergeMap } from 'rxjs/operators';

const getErrorMessage = ( maxRetry: number ) => 
` Tried to load Resource over XHR for ${maxRetry} times without success. `;

const DEFAULT_MAX_RETRIES = 5;
const DEFAULT_BACKOFF = 1000;

//Creating a custom operator
export function delayedRetry(delayMs: number, maxRetry = DEFAULT_MAX_RETRIES) {
    let retries = maxRetry;

    return(src: Observable<any>) => 
        src.pipe(
            retryWhen((errors: Observable<any>) => errors.pipe(
                delay(delayMs),
                mergeMap(error => retries-- > 0 ? of(error) : throwError(getErrorMessage(maxRetry))
                ))
            )
        );
}

//Creating a custom operator
export function retryWithBackoff(delayMs: number, maxRetry = DEFAULT_MAX_RETRIES, backoffMs = DEFAULT_BACKOFF) {
    let retries = maxRetry;

    return(src: Observable<any>) => 
        src.pipe(
            retryWhen((errors: Observable<any>) => errors.pipe(
                mergeMap(error => {
                    if(retries-- > 0) {
                        const backoffTime = delayMs + (maxRetry - retries) * backoffMs;
                        return of(error).pipe(delay(backoffTime));
                    }
                    return throwError(getErrorMessage(maxRetry))
                }
                ))
            )
        );
}

@Injectable({
    providedIn: 'root',
})

export class EmployeeService {
    // private _apiUrl: string = "https://localhost:44377/api/employees"; 
    // private _apiUrl: string = "/api/employeess";
    private _apiUrl: string = "/api/employeess";

    statusMessage: string = 'Loading data. Please wait...';
   
    constructor(private _http: HttpClient) {
            
    }

    getEmployees(): Observable<IEmployee[]> {
        return this._http.get<IEmployee[]>(this._apiUrl)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }

    //retry() - indefinitely or until the Observable completes 
    //retry(3) - retries 3 times
    //retryWhen((err) => err.pipe(delay(10000)))
    //retryWhen((err) => err.pipe(delay(1000), take(10)))
    getEmployeeByCode(empCode: string): Observable<IEmployee> {
        return this._http.get<IEmployee>(this._apiUrl + "/" + empCode)
            .pipe(
                // delayedRetry(1000, 3),
                retryWithBackoff(1000, 5, 2000),
                catchError(this.handleError)
            );  
    }

    // getEmployeeByCode(empCode: string): Promise<IEmployee> {
    //     return this._http.get<IEmployee>(this._apiUrl + "/" + empCode).toPromise();  
    // }

    // handleError(error: any) {
    //     let errorMessage = '';
    //     if (error.error instanceof ErrorEvent) {
    //         // client-side error
    //         errorMessage = `Error: ${error.error.message}`;
    //     } else {
    //         // server-side error
    //         errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    //     }
    //     console.error(errorMessage);
    //     return throwError(errorMessage);
    // }

    handleError(error: Response) {
        console.error(error);
        return throwError(error);
    }
}