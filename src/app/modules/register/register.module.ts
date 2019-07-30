import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './components/register/register.component';
import {
	MatFormFieldModule,
	MatButtonModule,
	MatInputModule,
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		RegisterComponent
	],
	imports: [
		CommonModule,
		RegisterRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatButtonModule,
		MatCheckboxModule,
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
	]
})
export class RegisterModule {}
