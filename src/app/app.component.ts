import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {map, first} from 'rxjs/operators';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})
export class AppComponent implements OnInit {
	title='client-app'
	constructor() {}
	ngOnInit() {}

}
