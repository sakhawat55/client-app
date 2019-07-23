import {Component, OnInit} from '@angular/core';
import {ActionButtons} from '../../interfaces';
import {Input} from '@angular/core';

@Component({
  selector: 'cli-action-button',
  template: `<button routerLink="{{getRouterLink()}}">{{buttonConfig.text}}</button>`,
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {
  @Input() buttonConfig: ActionButtons;

  constructor() {}

  ngOnInit() {
  }

  getRouterLink(): string {
    return this.buttonConfig.routerLink;
  }

}
