import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowHeadlinesComponent} from './show-headlines/show-headlines.component';
import {ShowSourcesComponent} from './show-sources/show-sources.component';
import {ShowHeadlinesFromSourceComponent} from './show-headlines-from-source/show-headlines-from-source.component';

const routes: Routes = [
  {path: '', component: ShowHeadlinesComponent},
  {path: 'sources', component: ShowSourcesComponent},
  {path: 'showHeadlinesFromSource', component: ShowHeadlinesFromSourceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
