import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
	providedIn: 'root'
})
export class ConfirmPasswordValidatorService {
	constructor() {}
}

export class PasswordMathcesValidator {
	static passwordMatchValidator(control: AbstractControl): ValidationErrors {
		const password = control.get('password').value; // to get value in input tag
		const confirmPassword = control.get('confirm').value; // to get value in input tag
		if (password !== confirmPassword) {
			control.get('confirm').setErrors({ MatchPassword: true });
		} else {
			return null;
		}
	}
}
