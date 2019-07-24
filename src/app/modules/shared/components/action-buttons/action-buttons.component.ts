import {Component, OnInit, Input} from '@angular/core';
import {ActionButtons} from '../../interfaces';

@Component({
  selector: 'cli-action-buttons',
  template: `<div *ngFor="let buttonConfig of getConfigForActionButtons()">
  <cli-action-button [buttonConfig]="buttonConfig"></cli-action-button>
</div>
`,
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent {
 private greetingButtonsConfig: ActionButtons[] =
[
  {type: 'reference', text: 'instagram news', routerLink: 'insta'},
  {type: 'reference', text: 'twitter news', routerLink: 'twitter'},
  {type: 'reference', text: 'github gags', routerLink: 'github'}
]
  @Input() buttonsConfig: ActionButtons[];
  constructor() { }

  getConfigForActionButtons(): ActionButtons[] {
    if (this.buttonsConfig) {
      return this.buttonsConfig;
    }

    return this.greetingButtonsConfig;
  }
}
