import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActionButtonsComponent} from './components/action-buttons/action-buttons.component';
import {ActionButtonComponent} from './components/action-button/action-button.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [ActionButtonsComponent, ActionButtonComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
