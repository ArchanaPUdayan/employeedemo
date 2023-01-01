import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { ViewallComponent } from './viewall/viewall.component';
import { SearchempComponent } from './searchemp/searchemp.component';
import { EditComponent } from './edit/edit.component';

const myRoute:Routes=[
  {
    path:"",
    component: AdminloginComponent,

  },
  {
    path:"/add",
    component:AddemployeeComponent
  },
  {
    path:"/view",
    component:ViewallComponent
  },
  {
    path:"/search",
    component:SearchempComponent
  },
  {
    path:"/edit",
    component:EditComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AddemployeeComponent,
    ViewallComponent,
    SearchempComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
