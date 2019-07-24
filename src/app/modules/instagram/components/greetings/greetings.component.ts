import {Component, OnInit} from '@angular/core';
import {ActionButtons} from 'src/app/modules/shared/interfaces';

@Component({
  selector: 'cli-greetings',
  template: `<cli-action-buttons [buttonsConfig]="getButtonsConfig()"></cli-action-buttons>`,
  styleUrls: ['./greetings.component.scss']
})
export class GreetingsComponent implements OnInit {

  private buttonsConfig: ActionButtons[] = [
    {type: 'reference', text: 'instagram people', routerLink: 'insta'},
    {type: 'reference', text: 'instagram hashtags', routerLink: 'twitter'},
    {type: 'reference', text: 'instagram random', routerLink: 'github'}
  ]
  constructor() { }

  ngOnInit() {
  }

  getButtonsConfig(): ActionButtons[] {
    return this.buttonsConfig;
  }

}
