import { AppFeedbackComponent } from './app.feedback.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './app.home';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent, AppFeedbackComponent, HomeComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
