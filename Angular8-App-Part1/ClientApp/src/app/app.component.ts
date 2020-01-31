import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <button class="colorClass" [class]='classesToApply'>My Button</button>
      <br /><br />
      <button class="colorClass" [class.boldClass]='!applyBoldClass'>My Button</button>
      <br /><br />
      <button class="colorClass italicsClass boldClass" [class.boldClass]='applyBoldClass'>My Button</button>
      <br /><br />
      <button class="colorClass" [ngClass]='addClasses()'>My Button</button>
      <br /><br />
      <my-employee></my-employee>
    </div>
  `
})
export class AppComponent {
  classesToApply: string = 'italicsClass boldClass';
  applyBoldClass: boolean = false;
  applyItalicsClass: boolean = true;
  colorClass: boolean = false;

  addClasses() {
    let classes = {
      boldClass: this.applyBoldClass,
      italicsClass: this.applyItalicsClass,
      colorClass: this.colorClass
    };
    return classes;
  }

}
