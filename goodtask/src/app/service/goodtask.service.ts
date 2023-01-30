import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpResponse } from '@angular/common/http';
import { TaskModel } from '../model/TaskModel';
import { Observable } from 'rxjs';
import { API_PATH } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})

export class GoodtaskService {

  constructor( private http: HttpClient) {}

  CreateTask(task: TaskModel): Observable<any>{
    return this.http.post(`${API_PATH}tasks`, task);
  }

  ListTasks() : Observable<any>{    
    return this.http.get(`${API_PATH}tasks/all/`)
  }  
  
  UpdateTask(task: TaskModel) : Observable<any>{
    return this.http.put(`${API_PATH}tasks/update/`, task);
  }
    
  RemoveTask(id: any) : Observable<any>{
    return this.http.delete(`${API_PATH}tasks/delete/`.concat(id));
  }
    
  ChangeState(task: TaskModel) : Observable<any>{
    return this.http.put(`${API_PATH}tasks/update/`, task);
  }  
}
