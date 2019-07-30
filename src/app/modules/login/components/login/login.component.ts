import {Component, OnInit} from '@angular/core';
import {Validators, FormControl, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss'
  ]
})
export class LoginComponent implements OnInit {
  constructor(private fb : FormBuilder) {}
  form : FormGroup;

  getErrorMessage() {
    return this.form.get('email').hasError('required')
      ? 'You must enter a value'
      : this.form.get('email').hasError('email') ? 'Not a valid email' : '';
  }
  getPasswordErrorMessage() {
    return this.form.get('password').hasError('required')
      ? 'You must enter a value'
      : this.form.get('password').invalid
        ? 'Password must be at least 8 symbols and 1 digit'
        : '';
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/\d+[a-zA-Z]+/)
      ])
    });
  }
}
