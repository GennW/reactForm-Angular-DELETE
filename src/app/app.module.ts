import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PasswordValidatorDirective } from './directives/password-validator.directive';
import { PasswordValidatorNotEmailDirective } from './directives/password-validator-not-email.directive';
import { EmailExistDirective } from './directives/email-exist.directive';
import { TdFormComponent } from './components/td-form/td-form.component';
import { ReactFormComponent } from './components/react-form/react-form.component'; // Импортируйте AppComponent здесь

@NgModule({
  declarations: [
    AppComponent,
    PasswordValidatorDirective,
    PasswordValidatorNotEmailDirective,
    EmailExistDirective,
    TdFormComponent,
    ReactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Указываем AppComponent в качестве компонента для загрузки
})
export class AppModule { }
