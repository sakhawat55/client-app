import {Injectable} from '@angular/core';
import {config} from '../../../../../../app-config';
@Injectable({
  providedIn: 'root'
})
export class FetchInstaPeopleService {

  constructor() { }

  getUserSelfInfoUrl(): string {
    const {userSelfInfo} = config.getEndpoints();

    return userSelfInfo;
  }
}
