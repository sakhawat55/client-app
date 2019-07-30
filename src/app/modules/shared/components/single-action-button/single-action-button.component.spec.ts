import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SingleActionButtonComponent} from './single-action-button.component';
import {CommonModule} from '@angular/common';
import {ActionButton} from '../../interfaces';

describe('SingleActionButtonComponent', () => {
  let component: SingleActionButtonComponent;
  let fixture: ComponentFixture<SingleActionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleActionButtonComponent ],
      imports: [CommonModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleActionButtonComponent);
    component = fixture.componentInstance;
    const config: ActionButton = {
      type: 'ref',
      text: 'insta people',
      routerLink: 'insta people'
    };

    component.config = config;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
