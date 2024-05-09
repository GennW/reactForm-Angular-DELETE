import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { __values } from 'tslib';

@Directive({
  selector: '[emailExist]',
  providers: [
    { provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef( () => EmailExistDirective), multi: true }
  ]
})
export class EmailExistDirective implements AsyncValidator{

  constructor() { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise<ValidationErrors | null>((resolve, reject) => {
      setTimeout(() => {
        resolve(null);
        // resolve({emailExist: {value: control.value}})
      }, 3000);
    })
  }

}
