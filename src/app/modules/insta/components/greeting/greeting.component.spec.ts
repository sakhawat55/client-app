import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GreetingComponent} from './greeting.component';
import {SharedModule} from '../../../shared/shared.module';
import {HttpModule} from '@angular/http';

describe('GreetingComponent', () => {
  let component: GreetingComponent;
  let fixture: ComponentFixture<GreetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetingComponent ],
      imports: [SharedModule, HttpModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
