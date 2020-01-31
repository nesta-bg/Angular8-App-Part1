//Click on the Component F12 = go to the definition
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1> {{ 'Page Header = ' + pageHeader }} </h1>
      <h1> {{ 10 + 20 + 30 }} </h1>
      <h1> {{ pageHeader ? pageHeader : 'No Header' }} </h1>
      <img src='{{ imagePath }}' />
      <h1> {{ getFullName() }} </h1>
      <my-employee></my-employee>
    </div>
  `
})
export class AppComponent {
  // pageHeader: string = 'Employee Details';
  pageHeader: string = null;
  imagePath: string = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';

  firstName: string = 'Tom';
  lastName: string = 'Hopkins';

  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
