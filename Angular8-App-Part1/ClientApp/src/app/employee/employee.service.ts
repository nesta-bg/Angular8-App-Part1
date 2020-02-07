import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class EmployeeService {
    // private _apiUrl: string = "https://localhost:44377/api/employees"; 
    // private _apiUrl: string = "/api/employeess";
    private _apiUrl: string = "/api/employees";

    constructor(private _http: HttpClient) {
            
    }

    getEmployees(): Observable<IEmployee[]> {
        return this._http.get<IEmployee[]>(this._apiUrl)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }

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