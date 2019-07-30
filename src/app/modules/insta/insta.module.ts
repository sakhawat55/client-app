import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstaRoutingModule } from './insta-routing.module';
import { GreetingComponent } from './components/greeting/greeting.component';

@NgModule({
  declarations: [GreetingComponent],
  imports: [
    CommonModule,
    InstaRoutingModule
  ]
})
export class InstaModule { }
