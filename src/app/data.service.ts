
import  { Injectable }        from '@angular/core';
import  { Task }              from '../app/models/task.interface';
import  { BehaviorSubject }   from 'rxjs';



@Injectable
({
  providedIn: 'root'
})



export class DataService 
{
  listAllTasks:       Array<Task> = new Array();
  listTasksDone:      Array<Task> = new Array();
  listTasksNotDone:   Array<Task> = new Array();

  listAll$      = new BehaviorSubject<Task[]>(this.listAllTasks);
  listDone$     = new BehaviorSubject<Task[]>(this.listTasksDone);
  listNotDone$  = new BehaviorSubject<Task[]>(this.listTasksNotDone);



  constructor() 
  { 

    // to load all tasks
    this.loadTasks().then( (data:Array<Task>) => 
    {
      data.forEach( (item) =>
      {
        this.listAllTasks.push(item);
      });

      this.sortLists();
      
      this.listAll$.next( this.listAllTasks );
    });

    // to load only tasks are done
    this.loadTasks().then( (data:Array<Task>) => 
    {
      data.forEach( (item) =>
      {
        this.listTasksDone.push(item);
      });

      this.sortLists();
      
      this.listDone$.next( this.listTasksDone );
    });

    // to load only tasks are not done
    this.loadTasks().then( (data:Array<Task>) => 
    {
      data.forEach( (item) =>
      {
        this.listTasksNotDone.push(item);
      });

      this.sortLists();
      
      this.listNotDone$.next( this.listTasksNotDone );
    });

  }  
  


  // to add all tasks to corresponding list
  addToListAllTasks( task: Task )
  {
    this.listAllTasks.push( task );
    this.listAll$.next( this.listAllTasks );
    
    this.sortLists();
    
    let data = JSON.stringify( this.listAllTasks );
    try
    {
      window.localStorage.setItem("tasks", data);

      if ( !window.localStorage.getItem("tasks") )
      {
          throw("local storage not available");
      }
    }
    catch( exc )
    {
      console.log( exc );
    }
  }



  // to add tasks are done to corresponding list
  addToListTasksDone( task: Task )
  {
    this.listTasksDone.push( task );
    this.listDone$.next( this.listTasksDone );
    
    this.sortLists();
    
    let data = JSON.stringify( this.listTasksDone );
    try
    {
      window.localStorage.setItem("tasks", data);

      if ( !window.localStorage.getItem("tasks") )
      {
          throw("local storage not available");
      }
    }
    catch( exc )
    {
      console.log( exc );
    }
  }
  

  
  // to add tasks are not done to corresponding list
  addTo( task: Task )
  {
    this.listTasksNotDone.push( task );
    this.listNotDone$.next( this.listTasksNotDone );
    
    this.sortLists();
    
    let data = JSON.stringify( this.listTasksNotDone );
    try
    {
      window.localStorage.setItem("tasks", data);

      if ( !window.localStorage.getItem("tasks") )
      {
          throw("local storage not available");
      }
    }
    catch( exc )
    {
      console.log( exc );
    }
  }
  
  

  // to load tasks
  loadTasks()
  {

    return new Promise( (resolve, reject) => 
    {
      if ( !window.localStorage.getItem("tasks") )
      {
        reject( false );
      }
      else
      {
        let data = JSON.parse( window.localStorage.getItem("tasks") );
        resolve( data );
      }
    });

  }
  


  sortLists()
  {

    // this.listAllTasks.sort( (task1:Task, task2:Task) => 
    // {
    //   return task2.stop - task1.stop;
    // });

    // this.listTasksDone.sort( (task1:Task, task2:Task) => 
    // {
    //   return task2.stop - task1.stop;
    // });

    // this.listTasksNotDone.sort( (task1:Task, task2:Task) => 
    // {
    //   return task2.stop - task1.stop;
    // });

  }

    
}
