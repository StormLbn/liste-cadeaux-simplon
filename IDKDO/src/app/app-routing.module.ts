import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouritesComponent } from './favourites/favourites.component';
import { PresentsListComponent } from './presents-list/presents-list.component';

const routes: Routes = [
  {path : "recherche", component : PresentsListComponent},
  {path : "favoris", component : FavouritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
