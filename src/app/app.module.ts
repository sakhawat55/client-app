import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InstagramModule} from './modules/instagram/instagram.module';
import {SharedModule} from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InstagramModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
