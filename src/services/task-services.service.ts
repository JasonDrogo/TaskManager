import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServicesService {

  constructor(private http : HttpClient) { }
  httpOptions = new HttpHeaders({
    'AuthToken': 'HrGZ8nTVnakr2rTUjTSDMe4rUeouuWn3'        
    // 'content-type': 'application/json'
  });

  createTask(payload : FormData) : Observable<any>{
  return this.http.post<any>('https://devza.com/tests/tasks/create',payload,{headers : this.httpOptions});
  }

  getUsers() : Observable<any>{
    return this.http.get<any>('https://devza.com/tests/tasks/listusers',{headers : this.httpOptions});
  }
  

  getTaskList(){
    return this.http.get<any>('https://devza.com/tests/tasks/list',{headers : this.httpOptions});
    
  }

  updateTask(payload :FormData){
    return this.http.post<any>('https://devza.com/tests/tasks/update',payload,{headers : this.httpOptions});
  }

  deleteTask(deleteData : FormData){
    return this.http.post<any>('https://devza.com/tests/tasks/delete',deleteData,{headers : this.httpOptions});
  }
}
