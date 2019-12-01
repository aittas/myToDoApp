
import  { NgModule }                          from '@angular/core';
import  { CommonModule }                      from '@angular/common';
import  { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import  { IonicModule }                       from '@ionic/angular';
import  { Routes, RouterModule }              from '@angular/router';
import  { CompletedTasksPagePage }            from './completed-tasks-page.page';



const routes: Routes = 
[{
  path: '',
  component: CompletedTasksPagePage
}];



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

  declarations: [CompletedTasksPagePage]
})



export class CompletedTasksPagePageModule 
{

}
