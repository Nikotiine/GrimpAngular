import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validate-toast',
  templateUrl: './validate-toast.component.html',
  styleUrls: ['./validate-toast.component.scss'],
})
export class ValidateToastComponent {
  @Input() message: string = '';
  constructor() {}
}
