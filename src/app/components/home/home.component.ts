import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { taskUtil } from 'src/util/task.util';
import { TaskServicesService } from '../../../services/task-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
taskList : Array<any> =[];
show : boolean= false;
  constructor(public router : Router,private taskService : TaskServicesService) { }

  ngOnInit(): void {
    this.getTaskList();
  }

 
  getTaskList(){
this.taskService.getTaskList().subscribe((result : any)=>{
  this.taskList = result.tasks;
  this.show = true;
})
  }


 

  delete(id : any ,index : number){
let formdata : FormData = new FormData();
formdata.append('taskid',id);
this.taskService.deleteTask(formdata).subscribe((result :any)=>{
  this.taskList.splice(index,1);
})
  }


  basedOnPriorty(priority : number){
return this.taskList.filter((a : any)=> a.priority == priority);
  }

  getpriority(prior : any){

    return prior == '1' ? 'High' : (prior == '2' ? 'Medium' : 'Low');
  }

 
  

}
