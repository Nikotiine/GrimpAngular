import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-errors-taost',
  templateUrl: './errors-taost.component.html',
  styleUrls: ['./errors-taost.component.scss'],
})
export class ErrorsTaostComponent {
  @Input() message: string = '';
  constructor() {}
}
