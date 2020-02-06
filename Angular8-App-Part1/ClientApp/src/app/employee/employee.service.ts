import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class EmployeeService {
    // private _apiUrl: string = "https://localhost:44377/api/employees"; 
    private _apiUrl: string = "/api/employees";

    constructor(private _http: HttpClient) {
            
    }

    getEmployees(): Observable<IEmployee[]> {
        return this._http.get<IEmployee[]>(this._apiUrl);
    }
}