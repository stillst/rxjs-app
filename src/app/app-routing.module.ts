import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntervalComponent } from './pages/interval/interval.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: 'test', component: CreateComponent },
  { path: 'interval', component: IntervalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
