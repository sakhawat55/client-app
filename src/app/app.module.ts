import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {MatSidenavModule} from '@angular/material/sidenav';
import {StoreModule, MetaReducer, ActionReducer, ActionReducerMap} from '@ngrx/store';
import {localStorageSync} from 'ngrx-store-localstorage';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './modules/shared/shared.module';
import {HttpModule} from '@angular/http';

export const imports = [
  BrowserModule,
  AppRoutingModule,
  MatCheckboxModule,
  MatFormFieldModule,
  FormsModule,
  ReactiveFormsModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  BrowserAnimationsModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatOptionModule,
  MatSlideToggleModule,
  MatSidenavModule,
  SharedModule,
  HttpModule
];

@NgModule({
  imports,
  declarations: [AppComponent],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  entryComponents: [AppComponent],
  exports: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
