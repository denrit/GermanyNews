import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowHeadlinesComponent } from './show-headlines/show-headlines.component';
import { NavigationComponent } from './navigation/navigation.component';
<<<<<<< HEAD
import {HttpClientModule} from '@angular/common/http';

=======
import { ShowSourcesComponent } from './show-sources/show-sources.component';
import {HttpClientModule} from '@angular/common/http';
>>>>>>> 04e3c86cc0100f7012188f93b2c6f9aeff31ccd4

@NgModule({
  declarations: [
    AppComponent,
    ShowHeadlinesComponent,
    NavigationComponent,
    ShowSourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
