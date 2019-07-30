import {Component, OnInit, Input} from '@angular/core';
import {ActionButton} from '../../../shared/interfaces';

@Component({
  selector: 'action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent implements OnInit {

    @Input() configs: ActionButton[];
    constructor() { }

    ngOnInit() {}

}
