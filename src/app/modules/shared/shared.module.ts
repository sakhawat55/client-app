import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActionButtonsComponent} from './components/action-buttons/action-buttons.component';
import {SingleActionButtonComponent} from './components/single-action-button/single-action-button.component';

@NgModule({
  declarations: [ActionButtonsComponent, SingleActionButtonComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
