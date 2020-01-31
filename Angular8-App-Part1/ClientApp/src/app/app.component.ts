//Click on the Component F12 = go to the definition
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1> {{ pageHeader }} </h1>

      <img [src]='imagePath' />
      <img src='https://www.google.com/images/branding/{{ imagePath1 }}' />
      <button [disabled]='isDisabled'>Click Me</button>

      <span [innerHtml]='pageHeader'></span>
      <span bind-innerHtml='pageHeader'></span>

      <div>{{ badHtml }}</div>
      <div [innerHtml]='badHtml'></div>

      <my-employee></my-employee>
    </div>
  `
})
export class AppComponent {

  pageHeader: string = 'Employee Details';
  imagePath: string = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
  imagePath1: string = 'googlelogo/1x/googlelogo_color_272x92dp.png';
  isDisabled: boolean = true;
  badHtml: string = 'Hello <script>alert("Hacked");</script> World';
}
