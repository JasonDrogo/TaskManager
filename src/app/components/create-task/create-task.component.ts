import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { taskUtil } from 'src/util/task.util';

import { TaskServicesService } from '../../../services/task-services.service';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
 data : any ={message:'',assigned_to:null};

  constructor(public dialog : MatDialog ,private taskService : TaskServicesService,private router : Router,private activatedRoute : ActivatedRoute,private util : taskUtil)  {
    
let routerState = this.router.getCurrentNavigation().extras.state;
if(this.activatedRoute.routeConfig.path == 'update' && routerState == undefined ){
  this.router.navigate(['/']);
}
  if(routerState != undefined && Object.keys(routerState).length){
    this.data = routerState.data;
    
    this.data.due_date = this.data.due_date != null ? (this.data.due_date).toString().split(' ').join('T') : null;
   
    
  }
   }

  ngOnInit(): void {
  }
  

  openUsers(){
    const dialogRef = this.dialog.open(UsersComponent, {
      width: '30%',
      height: '60%',
    
   });

   dialogRef.afterClosed().subscribe((result) => {
     console.log(result);
     this.data.assigned_to = result.id;
     console.log('The dialog was closed');
     // this.animal = result;
   });
  }


  createOrUpdate(){
    this.data.id != undefined  ? this.updateTask() : this.createTask() ;
  }

  updateTask(){
    let formdata = this.util.getFormData(this.data);
  
    formdata.append('taskid',(this.data.id).toString() );
    this.taskService.updateTask(formdata).subscribe((result :any)=>{
      this.router.navigate(['/']);
    })
  }

  createTask(){   
let formdata = this.util.getFormData(this.data);

    this.taskService.createTask(formdata).subscribe((result :any)=>{
      this.router.navigate(['/']);
    })
  }

  
}
