import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowHeadlinesComponent} from './show-articles/show-headlines.component';
import {ShowSourcesComponent} from './show-sources/show-sources.component';

const routes: Routes = [
  {path: '', component: ShowHeadlinesComponent},
  {path: 'sources', component: ShowSourcesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
