import {Component, OnInit} from '@angular/core';
import {FetchInstaPeopleService} from '../../services/userSelf/fetch-insta-people.service';

@Component({
  selector: 'instagreetings',
  templateUrl: './instagreetings.component.html',
  styleUrls: ['./instagreetings.component.scss']
})
export class InstagreetingsComponent implements OnInit {

  constructor(private fetchInstaPeopleService: FetchInstaPeopleService) { }

  ngOnInit() {
  }

}
