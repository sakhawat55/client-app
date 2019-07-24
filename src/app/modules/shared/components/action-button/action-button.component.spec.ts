/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { ActionButtonsComponent } from "../action-buttons/action-buttons.component";
import { ActionButtonComponent } from "./action-button.component";
import { CommonModule } from "@angular/common";
import { ActionButtons } from "../../interfaces";

describe("ActionButtonComponent", () => {
  let component: ActionButtonComponent;
  let fixture: ComponentFixture<ActionButtonComponent>;

  beforeEach(async(async () => {
    TestBed.configureTestingModule({
      declarations: [ActionButtonsComponent, ActionButtonComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonComponent);
    component = fixture.componentInstance;
    const actionBtn: ActionButtons = {
      type: "reference",
      text: "test link",
      routerLink: "/"
    };
    component.buttonConfig = actionBtn;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should render button based on incoming config", () => {
    expect(component.getRouterLink()).toEqual('/');
  });
});
