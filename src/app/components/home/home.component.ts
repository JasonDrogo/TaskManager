import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Router } from '@angular/router';
import { TaskServicesService } from 'src/services/task-services.service';
import { CreateTaskComponent } from '../create-task/create-task.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
taskList : Array<any> =[]
  constructor(public router : Router,private taskService : TaskServicesService) { }

  ngOnInit(): void {
    this.getTaskList();
  }

 
  getTaskList(){
this.taskService.getTaskList().subscribe((result : any)=>{
  this.taskList = result.tasks;
})
  }


 

  delete(id : any ,index : number){
let formdata : FormData = new FormData();
formdata.append('taskid',id);
this.taskService.deleteTask(formdata).subscribe((result :any)=>{
  this.taskList.splice(index,1);
})
  }

}
