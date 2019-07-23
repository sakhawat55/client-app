import {Component, OnInit} from '@angular/core';
import {ActionButtons} from '../../interfaces';

@Component({
  selector: 'cli-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent {
 private greetingButtonsConfig: ActionButtons[] =
[
  {type: 'reference', text: 'instagram news', routerLink: 'insta'},
  {type: 'reference', text: 'twitter news', routerLink: 'twitter'},
  {type: 'reference', text: 'github gags', routerLink: 'github'}
]
 constructor() { }

 getConfigForActionButtons(): ActionButtons[] {

   return this.greetingButtonsConfig;
 }
}
