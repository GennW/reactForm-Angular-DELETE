import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

export function passwordNotEmailValidation(control: AbstractControl): ValidationErrors | null {
  const email = control.get('email')
  const password = control.get('password');

  return email && password && password.value === email.value ? {emailAsPassword: true} : null;
}


@Directive({
  selector: '[PasswordValidatorNotEmail]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: PasswordValidatorNotEmailDirective, multi: true }
  ]
})
export class PasswordValidatorNotEmailDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const email = control.get('email')
    const password = control.get('password');

    return email && password && password.value === email.value ? {emailAsPassword: true} : null;
  }

}
