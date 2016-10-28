import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'errorMessages' })
export class ErrorMessagesPipe implements PipeTransform {
  transform(value: Object): string {
    if (!value) { return; }
    let errors = [];

    if (value['pattern']) {
      errors.push(this.patternError(value));
    }
    if (value['minlength']) {
      errors.push(this.minLengthError(value));
    }
    if (value['maxlength']) {
      errors.push(this.maxLengthError(value));
    }
    if (value['required']) {
      errors.push(this.requiredError(value));
    }

    return errors.join(', ');
  }

  private patternError(value): string {
    return `must match /${value['pattern']['requiredPattern']}/ pattern`;
  }

  private maxLengthError(value): string {
    return `must be shorter than ${value['maxlength']['requiredLength'] + 1}`;
  }

  private minLengthError(value): string {
    return `must be longer than ${value['minlength']['requiredLength'] - 1}`;
  }

  private requiredError(value): string {
    return 'is required';
  }
}
