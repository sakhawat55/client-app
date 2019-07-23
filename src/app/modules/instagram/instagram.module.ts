import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InstaRoutingModule} from './instagram-routing.module';
import {GreetingsComponent} from './components/greetings/greetings.component';

@NgModule({
  imports: [
    CommonModule,
    InstaRoutingModule
  ],
  declarations: [GreetingsComponent]
})
export class InstagramModule { }
