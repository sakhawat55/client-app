import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InstaRoutingModule} from './instagram-routing.module';
import {GreetingsComponent} from './components/greetings/greetings.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    InstaRoutingModule,
    SharedModule
  ],
  declarations: [GreetingsComponent]
})
export class InstagramModule { }
