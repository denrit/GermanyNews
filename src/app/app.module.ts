import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowHeadlinesComponent } from './show-articles/show-headlines.component';
import { NavigationComponent } from './navigation/navigation.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ShowSourcesComponent} from './show-sources/show-sources.component';
import {HttpClientModule} from '@angular/common/http';
import { ShowHeadlinesFromSourceComponent } from './show-headlines-from-source/show-headlines-from-source.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ShowHeadlinesComponent,
    NavigationComponent,
    ShowSourcesComponent,
    ShowHeadlinesFromSourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
