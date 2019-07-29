import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagreetingsComponent } from './instagreetings.component';

describe('InstagreetingsComponent', () => {
  let component: InstagreetingsComponent;
  let fixture: ComponentFixture<InstagreetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagreetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagreetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
