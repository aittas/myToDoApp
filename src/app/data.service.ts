
import  { Injectable }        from '@angular/core';
import  { Task }              from '../app/models/task.interface';
import  { BehaviorSubject }   from 'rxjs';



@Injectable
({
  providedIn: 'root'
})



export class DataService 
{
  listAllTasks:         Array<Task> = new Array();
  listCompletedTasks:   Array<Task> = new Array();

  listAll$        = new BehaviorSubject<Task[]>(this.listAllTasks);
  listCompleted$  = new BehaviorSubject<Task[]>(this.listCompletedTasks);

  localStotageKeyNameForAllTAsks:         string;
  localStotageKeyNameForCompletedTAsks:   string;

  no1: number;
  no2: number;

  constructor ( ) 
  {
    this.localStotageKeyNameForAllTAsks = "allTasksList"
    this.localStotageKeyNameForCompletedTAsks = "completedTasksList"
  }  
  


  // to load  all  tasks
  loadAllTasks()
  {
    this.loadTasks( this.localStotageKeyNameForAllTAsks ).then( (data:Array<Task>) => 
    {
      data.forEach( (item) =>
      {
        this.listAllTasks.push(item);
      });

      this.sortLists(this.listAllTasks, true);
      
      this.listAll$.next( this.listAllTasks );
    });
  }

  // to load  completed  tasks
  loadCompletedTasks()
  {
    this.loadTasks( this.localStotageKeyNameForCompletedTAsks ).then( (data:Array<Task>) => 
    {
      data.forEach( (item) =>
      {
        this.listCompletedTasks.push(item);
      });

      this.sortLists(this.listCompletedTasks, false);

      this.listCompleted$.next( this.listCompletedTasks );
    });
  }





  // to add a new task to  'listAllTasks'  list
  addToListAllTasks( task: Task )
  {
    this.listAllTasks.push( task );
    this.listAll$.next( this.listAllTasks );
    
    this.sortLists(this.listAllTasks, true);
    
    this.saveTasks( this.listAllTasks, this.localStotageKeyNameForAllTAsks );
  }

  // to add a completed task to  'listCompletedTasks'  list
  addToListCompletedTasks( task: Task )
  {
    this.listCompletedTasks.push( task );
    this.listCompleted$.next( this.listCompletedTasks );
    
    this.sortLists(this.listCompletedTasks, false);
    
    this.saveTasks( this.listCompletedTasks, this.localStotageKeyNameForCompletedTAsks );
  }





  // delete from  'all tasks'  list
  deleteFromAllTasks( taskName:string )
  {
    this.listAllTasks.forEach( (task:Task, index) => 
    {
      if ( task.name == taskName )
      {
        this.listAllTasks.splice(index, 1);
      }
    });

    this.listAll$.next( this.listAllTasks );

    this.saveTasks( this.listAllTasks, this.localStotageKeyNameForAllTAsks );
  }





  // for completed tasks
  completeTask( task:Task, taskName:string )
  {
    // remove/delete from all list first
    this.deleteFromAllTasks( taskName );

    // add to completed tasks list
    this.addToListCompletedTasks( task )
  }

  // delete from  'completed tasks'  list
  deleteFromCompletedTasks( taskName:string )
  {
    this.listCompletedTasks.forEach( (task:Task, index) => 
    {
      if ( task.name == taskName )
      {
        this.listCompletedTasks.splice(index, 1);
      }
    });

    this.listCompleted$.next( this.listCompletedTasks );

    this.saveTasks( this.listCompletedTasks, this.localStotageKeyNameForCompletedTAsks );
  }





  // generic to sort a list
  sortLists( taskList:Task[], ascOrder:boolean)
  {
    taskList.sort( function( a, b ) 
    {
      var dateA = new Date(a.dueDate), dateB = new Date(b.dueDate);

      if (ascOrder==true)
      {
        return dateA.getTime() - dateB.getTime();
      }
      else
      {
        return dateB.getTime() - dateA.getTime();
      }
    
    } );
  }
  

  // generic to load tasks
  loadTasks( localStotageKeyName:string )
  {

    return new Promise( (resolve, reject) => 
    {
      if ( !window.localStorage.getItem( localStotageKeyName ) )
      {
        reject( false );
      }
      else
      {
        let data = JSON.parse( window.localStorage.getItem( localStotageKeyName ) );
        resolve( data );
      }
    });

  }


  // generic to save tasks
  saveTasks( taskList:Task[], localStotageKeyName:string )
  {
    let data = JSON.stringify( taskList );

    try
    {
      window.localStorage.setItem(localStotageKeyName, data);

      if ( !window.localStorage.getItem(localStotageKeyName) )
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
