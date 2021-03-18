import { CdkDragDrop,CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {  ChangeDetectionStrategy, Component, EventEmitter, Input,  OnInit, Output,ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { TaskServicesService } from 'src/services/task-services.service';
import { taskUtil } from 'src/util/task.util';

@Component({
  selector: 'app-taskbasedonpriorty',
  templateUrl: './taskbasedonpriorty.component.html',
  changeDetection : ChangeDetectionStrategy.OnPush,
  styleUrls: ['./taskbasedonpriorty.component.css']
})
export class TaskbasedonpriortyComponent implements OnInit {
  HighPrioritySource :  MatTableDataSource<any>;
  MediumPrioritySource :  MatTableDataSource<any>;
  LowPrioritySource :  MatTableDataSource<any> ;

@Input() set data(taskList :Array<any>){
this.HighPrioritySource =  new MatTableDataSource();
this.MediumPrioritySource =  new MatTableDataSource();
this.LowPrioritySource = new MatTableDataSource();
taskList.forEach((task:any)=>{
  task.priority == '1'  ? this.HighPrioritySource.data.push(task) : (task.priority == '2' ? this.MediumPrioritySource.data.push(task) : this.LowPrioritySource.data.push(task));
})


}



  constructor(private taskService : TaskServicesService ,private util : taskUtil) { }
  
  @ViewChild('HighPrior') HighdropList : CdkDropList;
  @ViewChild('MediumPrior') MediumdropList : CdkDropList;
  @ViewChild('LowPrior') LowdropList : CdkDropList;

  displayedColumns: string[] = [ "id", "message","assigned_to","assigned_name", "priority","created_on", "due_date"];
  ngOnInit(): void {

  }
 

  drop(event : CdkDragDrop<any>){

    // this.dataSource.data.push(event.item.data);
 
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
  let containerId = event.container.id;
  let previosContainerId = event.previousContainer.id;
 let a ;
  this.updatePriority(event.container.id,event.item.data);
  if(containerId == 'table1'){
    event.container.data.push(event.item.data)

    if(previosContainerId == 'table2'){
      a = this.MediumPrioritySource.data.findIndex((a:any)=> a.id == event.item.data.id);
      event.previousContainer.data.splice(a,1);
    }
    if(previosContainerId == 'table3'){
       a = this.LowPrioritySource.data.findIndex((a:any)=> a.id == event.item.data.id);
      event.previousContainer.data.splice(a,1);
    }
  }
  if(containerId == 'table2'){
    event.container.data.push(event.item.data);
    if(previosContainerId == 'table1'){
       a = this.HighPrioritySource.data.findIndex((a:any)=> a.id == event.item.data.id);
      event.previousContainer.data.splice(a,1);
    }
    if(previosContainerId == 'table3'){
       a = this.LowPrioritySource.data.findIndex((a:any)=> a.id == event.item.data.id);
      event.previousContainer.data.splice(a,1);
    }
  }
  if(containerId == 'table3'){
    event.container.data.push(event.item.data);
    if(previosContainerId == 'table2'){
       a = this.MediumPrioritySource.data.findIndex((a:any)=> a.id == event.item.data.id);
      event.previousContainer.data.splice(a,1);
    }
    if(previosContainerId == 'table1'){
       a = this.HighPrioritySource.data.findIndex((a:any)=> a.id == event.item.data.id);
      event.previousContainer.data.splice(a,1);
    }
  }
 

  }
  this.HighPrioritySource.data = JSON.parse(JSON.stringify(this.HighPrioritySource.data));
  this.MediumPrioritySource.data = JSON.parse(JSON.stringify(this.MediumPrioritySource.data));
  this.LowPrioritySource.data = JSON.parse(JSON.stringify(this.LowPrioritySource.data));

   console.log(event.container.data); 
  }
 

  updatePriority(id : string, row : any){
    let newPriority = id == 'table1' ? 1 : id == 'table2' ? 2 : 3;
    row.priority = newPriority;
    row.taskid = row.id;
    let formData = this.util.getFormData(row);
    this.taskService.updateTask(formData).subscribe((result : any)=>{
      console.log(result);
    })

  }
  
}

