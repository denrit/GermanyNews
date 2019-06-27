import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowHeadlinesComponent} from './show-headlines/show-headlines.component';

const routes: Routes = [
  {path: '', component: ShowHeadlinesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
