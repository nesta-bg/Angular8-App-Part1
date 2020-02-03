import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)='onClick()'>Click me</button><br/><br/>
    <button on-click='onClick()'>Click me</button><br/><br/>

    <my-employee></my-employee>
  `
})
export class AppComponent {
  onClick(): void {
    console.log('Button Clicked');
  }
}
