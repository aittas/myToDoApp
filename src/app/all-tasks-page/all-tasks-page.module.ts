
import  { NgModule }                          from '@angular/core';
import  { CommonModule }                      from '@angular/common';
import  { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import  { IonicModule }                       from '@ionic/angular';
import  { Routes, RouterModule }              from '@angular/router';
import  { AllTasksPagePage }                  from './all-tasks-page.page';



const routes: Routes = 
[
  {
    path: '',
    component: AllTasksPagePage
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

  declarations: [AllTasksPagePage]
})



export class AllTasksPagePageModule
{

}

