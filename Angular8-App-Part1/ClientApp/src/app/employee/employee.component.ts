import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionLike } from 'rxjs';

@Component({
    selector: 'my-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
    employee: IEmployee;
    statusMessage: string = 'Loading data. Please wait...';

    subscription: SubscriptionLike;

    constructor(
        private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router) {
            
    }

    ngOnInit(){
        let empCode: string = this._activatedRoute.snapshot.params['code'];

        this.subscription = this._employeeService.getEmployeeByCode(empCode)
            //Go to Definition -> subscribe->Subscription->SubscriptionLike
            .subscribe((employeeData) => {
                        if (employeeData == null) {
                            this.statusMessage =
                                'Employee with the specified Employee Code does not exist';
                        }else {
                            this.employee = employeeData;
                        }}, 
                       (error) => { this.statusMessage =
                       //error
                       'Problem with the service. Please try again after sometime' + error;
                       console.error(error) });

        // this._employeeService.getEmployeeByCode(empCode)
        //     .then((employeeData)=>{
        //         if (employeeData == null) {
        //             this.statusMessage =
        //                 'Employee with the specified Employee Code does not exist';
        //         }else {
        //             this.employee = employeeData;
        //         } 
        //     }).catch((error)=>{
        //         this.statusMessage =  'Problem with the service. Please try again after sometime';
        //         console.error(error)
        //     });
    }

    onBackButtonClick() :void {
        this._router.navigate(['/employees']);
    }

    onCancelButtonClick(): void {
        this.statusMessage = 'Request cancelled';
        this.subscription.unsubscribe();
    }
}