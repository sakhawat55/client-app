import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetingsComponent } from './components/greetings/greetings.component';


const routes: Routes = [{
  path: '', component: GreetingsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstaRoutingModule { }
