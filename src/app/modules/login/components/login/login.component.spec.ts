import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from '../../login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	MatButtonModule,
	MatInputModule,
	MatFormFieldModule,
	MatCheckboxModule,
	MatToolbarModule,
	MatMenuModule,
	MatIconModule,
	MatCardModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatRadioModule,
	MatSelectModule,
	MatOptionModule,
	MatSlideToggleModule
} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					LoginComponent
				],
				imports: [
					CommonModule,
					LoginRoutingModule,
					FormsModule,
					BrowserAnimationsModule,
					ReactiveFormsModule,
					MatButtonModule,
					MatInputModule,
					MatFormFieldModule,
					MatButtonModule,
					MatCheckboxModule,
					MatInputModule,
					MatFormFieldModule,
					MatToolbarModule,
					MatMenuModule,
					MatIconModule,
					MatCardModule,
					MatDatepickerModule,
					MatNativeDateModule,
					MatRadioModule,
					MatSelectModule,
					MatOptionModule,
					MatSlideToggleModule
				],
				providers: []
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(LoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
