import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InstagramRoutingModule} from './instagram-routing.module';
import {InstagreetingsComponent} from './components/instagreetings/instagreetings.component';

@NgModule({
  declarations: [InstagreetingsComponent],
  imports: [
    CommonModule,
    InstagramRoutingModule
  ]
})
export class InstagramModule { }
