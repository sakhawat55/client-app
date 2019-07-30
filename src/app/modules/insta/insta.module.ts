import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InstaRoutingModule} from './insta-routing.module';
import {GreetingComponent} from './components/greeting/greeting.component';
import {SharedModule} from '../shared/shared.module';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [GreetingComponent],
  imports: [
    CommonModule,
    InstaRoutingModule,
    SharedModule,
    HttpClientModule

  ]
})
export class InstaModule { }
