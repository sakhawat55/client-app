import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchAccessTokenOwnerInfoService {

  constructor(private http: Http) { }

  fetchInfo() : Observable<any> {
    return this.http.get('https://github.com');
  }
}
