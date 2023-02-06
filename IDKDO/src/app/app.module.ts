import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PresentIdeaComponent } from './present-idea/present-idea.component';
import { PresentsListComponent } from './presents-list/presents-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FavorieComponent } from './favorie/favorie.component';
import { HttpClientModule } from '@angular/common/http';
import { FavorieCardComponent } from './favorie-card/favorie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    PresentIdeaComponent,
    PresentsListComponent,
    FavorieComponent,
    FavorieCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
