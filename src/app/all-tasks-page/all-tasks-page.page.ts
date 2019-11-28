
import  { Component, OnInit }   from '@angular/core';
import  { Task }                from '../models/task.interface';
import  { Subscription }        from 'rxjs';
import  { DataService }         from '../data.service';



@Component
({
  selector: 'app-all-tasks-page',
  templateUrl: './all-tasks-page.page.html',
  styleUrls: ['./all-tasks-page.page.scss'],
})



export class AllTasksPagePage implements OnInit 
{
  allTasks:     Array<Task> = [];
  allTasksSub:  Subscription;  

  constructor
  (
    private dataService: DataService
  ) 
  { }

  ngOnInit() 
  {
    this.allTasksSub  = this.dataService.listAll$.subscribe(  taskData => this.allTasks  = taskData );
  }

  buttonDoneOnClick(itemName)
  {
    //this.dataService.deleteFromAllTasks(itemName);
  }

  buttonDeleteOnClick(itemName)
  {
    this.dataService.deleteFromAllTasks(itemName);
  }

}
