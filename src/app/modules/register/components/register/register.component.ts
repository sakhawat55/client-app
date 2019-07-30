import {Component, OnInit} from '@angular/core';
import {Validators, FormControl, ValidatorFn, FormGroup, FormBuilder} from '@angular/forms';
import {PasswordMathcesValidator} from '../../services/customFormValidators/confirm-password-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.scss'
  ]
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
	form: FormGroup;

	getErrorMessage() {
	  return this.form.get('email').hasError('required')
	    ? 'You must enter a value'
	    : this.form.get('email').hasError('email') ? 'Not a valid email' : '';
	}
	getPasswordErrorMessage() {
	  return this.form.get('password').hasError('required')
	    ? 'You must enter a value'
	    : this.form.get('email').invalid
	      ? 'Password must be at least 8 symbols and 1 digit'
	      : '';
	}

	ngOnInit() {
	  this.form = this.fb.group(
	    {
	      email: new FormControl(
	        null,
	        Validators.compose([
	          Validators.required,
	          Validators.email
	        ])
	      ),
	      password: new FormControl(
	        null,
	        Validators.compose([
	          Validators.required,
	          Validators.minLength(8)
	        ])
	      ),
	      confirm: new FormControl(
	        null,
	        Validators.compose([
	          Validators.required
	        ])
	      )
	    },
	    {
	      validator: PasswordMathcesValidator.passwordMatchValidator
	    }
	  );
	}
}
