import { Component, Input } from '@angular/core';
import {
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-error-label',
  template: `
    <div *ngIf="control.errors && (submitted || control.dirty || control.touched)" class="alert alert-danger">
      <ng-content></ng-content>
    </div>
  `
})
export class ErrorLabelComponent {
  @Input() control: FormControl;
  @Input() submitted: boolean;
}
