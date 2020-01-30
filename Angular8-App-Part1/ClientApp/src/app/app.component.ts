//Click on the Component F12 = go to the definition
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1> {{ pageHeader }} </h1>
      <my-employee></my-employee>
    </div>
  `
})
export class AppComponent {
  pageHeader: string = 'Employee Details';
}
