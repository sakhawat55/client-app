import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstagramComponent } from './instagram.component';
import {InstaRoutingModule} from './instagram-routing.module';
import { GreetingsComponent } from './components/greetings/greetings.component';
import { ActionsComponent } from './components/actions/actions.component';

@NgModule({
  imports: [
    CommonModule,
    InstaRoutingModule
  ],
  declarations: [InstagramComponent, GreetingsComponent, ActionsComponent]
})
export class InstagramModule { }
