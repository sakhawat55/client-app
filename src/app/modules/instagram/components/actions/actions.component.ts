import {Component, OnInit} from '@angular/core';

export interface Action {
  type: string;
}

@Component({
  selector: 'cli-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  private actions : Action[] = [];
  constructor() { }

  ngOnInit() {
  }

}
