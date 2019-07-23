import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ActionButtonsComponent} from './modules/shared/components/action-buttons/action-buttons.component';

const routes: Routes = [
  {path: '', component: ActionButtonsComponent},
  {
    path: 'insta', loadChildren: './modules/instagram/instagram.module#InstagramModule'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
