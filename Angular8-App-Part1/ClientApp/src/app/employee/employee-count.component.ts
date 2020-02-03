import { Component, Input } from '@angular/core';

@Component({
  selector: 'employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent {
  @Input() all: number;
  @Input() male: number;
  @Input() female: number;
}
