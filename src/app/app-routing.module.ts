import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { IntervalComponent } from './pages/interval/interval.component';
import { FromComponent } from './pages/from/from.component';
import { OfComponent } from './pages/of/of.component';

const routes: Routes = [
  { path: 'test', component: CreateComponent },
  { path: 'interval', component: IntervalComponent },
  { path: 'from', component: FromComponent },
  { path: 'of', component: OfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
