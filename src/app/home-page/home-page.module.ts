
import  { NgModule }                          from '@angular/core';
import  { CommonModule }                      from '@angular/common';
import  { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import  { IonicModule }                       from '@ionic/angular';
import  { Routes, RouterModule }              from '@angular/router';
import  { HomePagePage }                      from './home-page.page';



const routes: Routes = 
[
  {
    path: '',
    component: HomePagePage
  }
];



@NgModule
({
  imports: 
  [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],

  declarations: [HomePagePage]
})



export class HomePagePageModule 
{

}
