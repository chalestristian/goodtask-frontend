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

  listarTasks() : Observable<any>{
    return this.http.get(`${API_PATH}tasks/`)
  }
  
  listarAllTasks() : Observable<any>{    
    return this.http.get(`${API_PATH}tasks/all/`)
  }  
  
  
  atualizarTask(task: TaskModel) : Observable<any>{
    console.log("no service",task)
    return this.http.put(`${API_PATH}tasks/update/`, task);
  }
    
  removerTask(id: any) : Observable<any>{
    return this.http.delete(`${API_PATH}tasks/delete/`.concat(id));
  }
    
  desativarTask(task: TaskModel) : Observable<any>{
    console.log("no service",task)
    return this.http.put(`${API_PATH}tasks/update/`, task);
  }  

}
