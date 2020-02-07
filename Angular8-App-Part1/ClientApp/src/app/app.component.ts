import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="padding:5px">
        <ul class="nav nav-tabs">
          <li class="nav-item" routerLinkActive="active">
              <a class="nav-link" routerLink="home">Home</a>
          </li>
          <li class="nav-item" routerLinkActive="active">
              <a class="nav-link" routerLink="employees">Employees</a>
          </li>
      </ul>
      <br/>
       <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent {
 
}


