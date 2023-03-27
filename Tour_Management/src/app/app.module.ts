import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListTourComponent } from './list-tour/list-tour.component';
import { AddTourComponent } from './add-tour/add-tour.component';
import { UpdateTourComponent } from './update-tour/update-tour.component';
import { ViewSpecificTourComponent } from './view-specific-tour/view-specific-tour.component';


@NgModule({
  declarations: [
    AppComponent,
    ListTourComponent,
    AddTourComponent,
    UpdateTourComponent,
    ViewSpecificTourComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
