import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordNotEmailValidation } from 'src/app/directives/password-validator-not-email.directive';
import { passwordValidator } from 'src/app/directives/password-validator.directive';

@Component({
  selector: 'react-form',
  templateUrl: './react-form.component.html',
  styleUrls: []
})
export class ReactFormComponent implements OnInit {

  signInForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    // email: new FormControl('', {updateOn: 'blur'}), // при директивах валидация будет срабатывать при потери фокуса
    password: new FormControl('', [Validators.required, passwordValidator('^(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*\d)(?=.*[\W_])[a-zA-Zа-яА-Я\d\W_]{8,}$')]),
    rememberMe: new FormControl(false),
  }, { validators: passwordNotEmailValidation })

get email() { return this.signInForm.get('email') }
get password() { return this.signInForm.get('password') }
  constructor() { }

  ngOnInit(): void {
    // this.email.setValue('77*8Qw@mail.ru');
    // вариант когда меняем все значения
    this.signInForm.setValue({
      email: '77*8Qw@mail.ru',
      password: '',
      rememberMe: true,
    });
    // вариант когда меняем только одно значение
    this.signInForm.patchValue({
      email: 'test',
    })

  }

  signIn() {
    console.log(this.signInForm.value)
  }

}
