import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';

import {ActionButton} from '../../interfaces';

@Component({
  selector: 'single-action-button',
  templateUrl: './single-action-button.component.html',
  styleUrls: ['./single-action-button.component.scss']
})
export class SingleActionButtonComponent implements OnInit {

  @Input() config: ActionButton;
  constructor() {}

  ngOnInit() {
  }

}
