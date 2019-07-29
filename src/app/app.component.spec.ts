import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
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
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					AppComponent
				],

				imports: [
					RouterTestingModule,
					BrowserModule,
					AppRoutingModule,
					BrowserAnimationsModule,
					MatButtonModule,
					MatCheckboxModule,
					MatInputModule,
					MatFormFieldModule,
					MatToolbarModule,
					BrowserModule,
					FormsModule,
					ReactiveFormsModule,
					MatButtonModule,
					MatMenuModule,
					MatToolbarModule,
					MatIconModule,
					MatCardModule,
					BrowserAnimationsModule,
					MatFormFieldModule,
					MatInputModule,
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

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'chatfront'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('chatfront');
	});

	// it('should render title in a h1 tag', () => {
	// 	const fixture = TestBed.createComponent(AppComponent);
	// 	fixture.detectChanges();
	// 	const compiled = fixture.debugElement.nativeElement;
	// 	expect(compiled.querySelector('h1').textContent).toContain('Welcome to chatfront!');
	// });
});
