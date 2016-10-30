import { Component, Input } from '@angular/core';
import {
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-input-field',
  template: `
    <div>
      <label [attr.for]=attribute>{{attribute}}</label>
      <input id={{attribute}} type={{type}} [formControl]="control">
      <app-error-label [control]="control" [submitted]="submitted"></app-error-label>
    </div>
  `
})
export class InputFieldComponent {
  @Input() attribute: string;
  @Input() type: string = 'text';
  @Input() submitted: boolean;
  @Input() control: FormControl;
}
