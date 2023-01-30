import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentIdeaComponent } from './present-idea/present-idea.component';
import { PresentsListComponent } from './presents-list/presents-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentIdeaComponent,
    PresentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
