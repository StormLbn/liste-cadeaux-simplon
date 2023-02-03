import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentsListComponent } from './presents-list/presents-list.component';

const routes: Routes = [
  {path : "recherche", component : PresentsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
