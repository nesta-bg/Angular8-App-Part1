import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Name : 
    <input [value]='name' (input)='name = $event.target.value'>
    <br>
    You entered : {{ name }}
    
    <br><br>

    Name : 
    <input [(ngModel)]='name' >
    <br>
    You entered : {{ name }}

    <br><br>

    <list-employee></list-employee>
  `
})
export class AppComponent {
  name: string = 'Tom';
}


