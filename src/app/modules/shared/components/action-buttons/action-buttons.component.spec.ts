import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

import { ActionButtonsComponent } from "./action-buttons.component";
import { ActionButtonComponent } from "../action-button/action-button.component";
import { ActionButtons } from '../../interfaces';

const config : ActionButtons[] = [
  {type: 'reference', text: 'instagram news', routerLink: 'insta'},
  {type: 'reference', text: 'twitter news', routerLink: 'twitter'},
  {type: 'reference', text: 'github gags', routerLink: 'github'}
]
describe("ActionButtonsComponent", () => {
  describe("with undefined config", () => {
    let component: ActionButtonsComponent;
    let fixture: ComponentFixture<ActionButtonsComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ActionButtonsComponent, ActionButtonComponent],
        imports: [RouterTestingModule]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ActionButtonsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it("should create", () => {
      expect(component).toBeTruthy();
      expect(component.buttonsConfig).toBeUndefined();
    });

    it("should return default config", () => {
      expect(component.getConfigForActionButtons()).toEqual(config);
    });
  });

  describe("with not undefined config", () => {
    let component: ActionButtonsComponent;
    let fixture: ComponentFixture<ActionButtonsComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ActionButtonsComponent, ActionButtonComponent],
        imports: [RouterTestingModule]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ActionButtonsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
    it("should render buttons based on config", () => {
      const config_ = component.getConfigForActionButtons();
      expect(config).toBe(config);
    });
  });
});
