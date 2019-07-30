import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ActionButtonsComponent} from './action-buttons.component';
import {CommonModule} from '@angular/common';
import {ActionButton} from '../../interfaces';
import {SingleActionButtonComponent} from '../single-action-button/single-action-button.component';

describe('ActionButtonsComponent', () => {
  let component: ActionButtonsComponent;
  let fixture: ComponentFixture<ActionButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionButtonsComponent, SingleActionButtonComponent ],
      imports: [CommonModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonsComponent);
    component = fixture.componentInstance;
    const configs: ActionButton[] = [
      {
        type: 'ref',
        text: 'insta people',
        routerLink: 'insta people'
      }
    ];

    component.configs = configs;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
