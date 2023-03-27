import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListTourComponent } from './list-tour/list-tour.component';
import { AddTourComponent } from './add-tour/add-tour.component';
import { UpdateTourComponent } from './update-tour/update-tour.component';


const routes: Routes = [ 
  {path: 'tours', component: ListTourComponent},
  {path: 'add-tour', component: AddTourComponent },
  {path: '', redirectTo: 'tours', pathMatch: 'full'},
  {path:'edit-tour/:id', component: UpdateTourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
