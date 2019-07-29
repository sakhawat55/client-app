import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InstagreetingsComponent} from './components/instagreetings/instagreetings.component';

const routes: Routes = [{
  path: '', component: InstagreetingsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstagramRoutingModule { }
