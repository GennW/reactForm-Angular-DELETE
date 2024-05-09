import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

// Функция валидатора для проверки пароля на соответствие заданному шаблону
export function passwordValidator(pattern: string): ValidatorFn {
 return  (control: AbstractControl): ValidationErrors | null => {
   // Проверяем значение контроля (пароля) на соответствие регулярному выражению
   const valid = new RegExp(pattern).test(control.value);
   // Если пароль соответствует шаблону, возвращаем null (нет ошибок), или возвращаем объект с ошибкой
   return valid ? null : { pattern: { value: control.value } };
 }
}

@Directive({
 selector: '[passwordValidator]',
 providers: [
   { provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi: true }
 ]
})

export class PasswordValidatorDirective implements Validator {
 
 constructor() { }
 @Input('passwordValidator') pattern = '';

 // Функция validate вызывает функцию passwordValidator с переданным шаблоном для проверки
 validate(control: AbstractControl): ValidationErrors | null {
  // Вызываем passwordValidator с текущим шаблоном (this.pattern) для проверки значения контроля control
   return passwordValidator(this.pattern)(control); //1:10 video
 }
}
