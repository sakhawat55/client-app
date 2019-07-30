import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleActionButtonComponent } from './single-action-button.component';

describe('SingleActionButtonComponent', () => {
  let component: SingleActionButtonComponent;
  let fixture: ComponentFixture<SingleActionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleActionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
