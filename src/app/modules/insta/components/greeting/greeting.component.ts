import {Component, OnInit} from '@angular/core';
import {ActionButton} from '../../../shared/interfaces';
import {FetchAccessTokenOwnerInfoService}
  from '../../services/fetchAccessTokenOwnerInfo/fetch-access-token-owner-info.service';
import {map, first} from 'rxjs/operators';

@Component({
  selector: 'greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {

  constructor(private fetchTokenOwnerInfoService: FetchAccessTokenOwnerInfoService) { }

  fetchInfo() {
    let response;

    return this.fetchTokenOwnerInfoService.fetchInfo().pipe(first()).subscribe(response_ => (response = response_));

    return response;
  }

  generateButtonsConfigs(): ActionButton[] {
    const fetchInfo = this.fetchInfo.bind(this);

    return [
      {
        type: 'action',
        text: 'first btn',
        onclick: fetchInfo
      },
      {
        type: 'action',
        text: 'second btn',
        onclick: () => console.log('second btn')
      },
      {
        type: 'action',
        text: 'third button',
        onclick: () => console.log('third btn')
      }
    ];
  }

  ngOnInit() {
  }

}
