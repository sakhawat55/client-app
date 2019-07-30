import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetingComponent} from './components/greeting/greeting.component'
const routes: Routes = [{path: '', component: GreetingComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstaRoutingModule { }
