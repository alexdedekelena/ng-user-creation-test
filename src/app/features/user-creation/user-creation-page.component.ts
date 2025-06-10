import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { UserFormGroup } from './interfaces/user-form-group.interface';

@Component({
  selector: 'app-user-creation-page',
  imports: [InputTextModule, CheckboxModule, ReactiveFormsModule, ButtonModule, DatePickerModule],
  templateUrl: './user-creation-page.component.html',
  styleUrl: './user-creation-page.component.css'
})
export class UserCreationPageComponent {

  // UserCreationStateService
  // state {}

  // signal => username computed().
  // this.userCreationStatdeService.username();

  userForm: FormGroup<UserFormGroup> = new FormGroup({
    username: new FormControl('' , [Validators.required, Validators.maxLength(30)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    dateExpiration: new FormControl(new Date(), [Validators.required, Validators.maxLength(10)]), // createDatePickerValidator() since is now DatePicker is no longer required
    repeatPassword: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    enabled: new FormControl(false)
  });
  // TODO: validatorOrPts for password confirm

  // DATEPICKER: DD-MM-AAAA
  // PASSWORD CONFIRM PASSWORD ===

  createUser() {
    const userCreationData = {
      username: this.userForm.controls.username.value,
      password: this.userForm.controls.password.value,
      dateExpiration: this.userForm.controls.dateExpiration.value,
      repeatPassword: this.userForm.controls.repeatPassword.value,
      enabled: this.userForm.controls.enabled.value,
    }

    
  }
}
