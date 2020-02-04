import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Your Text : <input type='text' [(ngModel)]='userText'/>
    <br/><br/>
    <simple [simpleInput]='userText'></simple>
  `
})

export class AppComponent {
  userText: string = 'Manager';
}


