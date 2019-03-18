import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatesComponent } from './create/create.component';
import { pagesRoutes } from './pages/pages.routing';

const routes: Routes = [
  { path: 'test', component: CreatesComponent },
  ...pagesRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
