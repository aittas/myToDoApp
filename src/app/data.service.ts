
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
  listAll$      = new BehaviorSubject<Task[]>(this.listAllTasks);



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



  //delete
  deleteFromAllTasks(id:string)
  {
    this.listAllTasks.forEach( (task:Task, index) => 
    {
      if ( task.name == id )
      {
        this.listAllTasks.splice(index, 1);
      }
    });

    this.listAll$.next( this.listAllTasks );

    this.saveData();
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
  
  

  saveData()
  {
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
  
  

    
}
