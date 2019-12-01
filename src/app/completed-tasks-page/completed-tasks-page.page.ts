import  { Component, OnInit }   from '@angular/core';
import  { Task }                from '../models/task.interface';
import  { Subscription }        from 'rxjs';
import  { DataService }         from '../data.service';



@Component({
  selector: 'app-completed-tasks-page',
  templateUrl: './completed-tasks-page.page.html',
  styleUrls: ['./completed-tasks-page.page.scss'],
})



export class CompletedTasksPagePage implements OnInit 
{
  completedTasks:     Array<Task> = [];
  completedTasksSub:  Subscription;  

  constructor
  (
    private dataService: DataService
  ) 
  { }

  ngOnInit()
  {
    this.completedTasksSub = this.dataService.listCompleted$.subscribe( taskData => this.completedTasks = taskData );
    this.dataService.loadCompletedTasks();
  }

  buttonDeleteOnClick(itemName)
  {
    this.dataService.deleteFromCompletedTasks(itemName);
  }

}
