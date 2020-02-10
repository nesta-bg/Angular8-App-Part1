import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeeCountComponent } from './employee/employee-count.component';
import { SimpleComponent } from './Others/simple.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './Others/pageNotFound.component';

// import { UserPreferencesService } from './employee/userPreferences.service';

//from more specific to more general
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/:code', component: EmployeeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeTitlePipe,
    EmployeeCountComponent,
    SimpleComponent,
    HomeComponent,
    PageNotFoundComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { useHash: false })
  ],
  providers: [
    // UserPreferencesService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
