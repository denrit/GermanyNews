import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowHeadlinesComponent } from './show-headlines/show-headlines.component';
import { NavigationComponent } from './navigation/navigation.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ShowSourcesComponent} from './show-sources/show-sources.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchArticlesComponent } from './search-articles/search-articles.component';
import { ShowHeadlinesFromSourceComponent } from './show-headlines-from-source/show-headlines-from-source.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowHeadlinesComponent,
    NavigationComponent,
    ShowSourcesComponent,
    SearchArticlesComponent,
    ShowHeadlinesFromSourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
