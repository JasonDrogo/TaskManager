import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TaskServicesService } from '../../../services/task-services.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
usersInfo : any[]=[];
show : boolean = false;
@Output() selectedUser = new EventEmitter<any>();
  constructor(private dataService : TaskServicesService,public dialogRef: MatDialogRef<UsersComponent>,public dialog : MatDialog) { }

  ngOnInit(): void {
    this.getUsers();

  }

  getUsers(){
this.dataService.getUsers().subscribe((data : any)=>{
this.usersInfo = data.users;
this.show = true;
})
  }

  selectUser(user : any){
this.dialogRef.close(user);
  }

  closeDialog(){
    this.dialogRef.close();
  }
}
