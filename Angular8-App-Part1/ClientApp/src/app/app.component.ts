import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1> {{ pageHeader }} </h1>

      <button [disabled]='isDisabled'>Click Me</button>
      <button disabled='{{ isDisabled }}'>Click Me</button>
      
      <br/>
      <input id='inputId' type='text' value='Tom' >

      <my-employee></my-employee>
    </div>
  `
})
export class AppComponent {

  pageHeader: string = 'Employee Details';
  isDisabled: boolean = true;
}
