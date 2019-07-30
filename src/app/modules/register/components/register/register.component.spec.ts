import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from '../../register-routing.module';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegisterComponent', () => {
	let component: RegisterComponent;
	let fixture: ComponentFixture<RegisterComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					RegisterComponent
				],
				imports: [
					CommonModule,
					RegisterRoutingModule,
					CommonModule,
					FormsModule,
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
					MatSlideToggleModule,
					BrowserAnimationsModule
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(RegisterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
