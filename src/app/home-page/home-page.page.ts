
import  { Component, OnInit }                   from '@angular/core';
import  { Validators, FormBuilder, FormGroup }  from '@angular/forms'
import  { DataService }                         from '../data.service';
import  { Task }                                from '../models/task.interface';
import  { AlertController }                     from '@ionic/angular';



@Component
({
    selector:     'app-home-page',
    templateUrl:  './home-page.page.html',
    styleUrls:    ['./home-page.page.scss'],
})



export class HomePagePage implements OnInit 
{
  formGroupTask:  FormGroup;

  constructor
  (
    private formBuilder:      FormBuilder,
    private dataService:      DataService,
    private alertController:  AlertController
  ) 
  { }

  ngOnInit() 
  {
    this.formGroupTask = this.formBuilder.group
    ({
        typedTask:    [ '', [ Validators.required, Validators.minLength(2) ] ],
        typedDueDate: [ '', [ Validators.required, Validators.minLength(2) ] ],
        typedCat:     [ '', [ Validators.required, Validators.minLength(2) ] ]
    });
  }

  async buttonAddOnClick()
  {
    let task: Task =
    {
      name:     this.formGroupTask.get('typedTask').value,
      dueDate:  this.formGroupTask.get('typedDueDate').value, 
      category: this.formGroupTask.get('typedCat').value,
      
      dateCreated: new Date().getTime()
    }

    this.dataService.addToListAllTasks(task);

    const alert = this.alertController.create( { subHeader:"Task added to list successfully!", buttons:['OK'] } );
    (await alert).present();
  }



  // async buttonAlertOnClick()
  // {
  //   let task: Task =
  //   {
  //     name:     this.formGroupTask.get('typedTask').value,
  //     dueDate:  new Date(),
  //     category: this.formGroupTask.get('typedCat').value
  //   }

  //   this.dateStr = new Intl.DateTimeFormat('en-US', {weekday:'long'}).format(task.dueDate)  + ', ' 
  //                   + task.dueDate.getDate().toString()                                     + '-'
  //                   + new Intl.DateTimeFormat('en-US', {month:'short'}).format(task.dueDate) + '-'
  //                   + task.dueDate.getFullYear().toString();
                    
  //   const alert = this.alertController.create({ header:task.name, subHeader:this.dateStr, message:task.category, buttons:['OK'] });
  //   (await alert).present();
  // }


}
