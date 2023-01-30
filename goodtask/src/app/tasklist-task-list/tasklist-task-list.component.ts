import { Component } from '@angular/core';
import { TaskModel } from '../model/TaskModel';
import { GoodtaskService } from '../service/goodtask.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-tasklist-task-list',
  templateUrl: './tasklist-task-list.component.html',
  styleUrls: ['./tasklist-task-list.component.css']
})
export class TasklistTaskListComponent {
  task: TaskModel = new TaskModel();
  tasks: Array<any> = new Array();
  sorting: Array<any> = new Array();
 

 
  constructor(public taskService: GoodtaskService ) { }
  ngOnInit(){
    this.list();
  }

  //TODO: Update nao funciona
  update(task: TaskModel){
    this.task.id = task.id;
    this.task.task = task.task;
    this.task.active = task.active;
    
    this.taskService.atualizarTask(this.task).subscribe(task => {
      this.task = new TaskModel();
      this.list();
     
    }, err =>{
      console.log("Erro ao atualizar task", err) 
    })
  }

  remover(id: number){
    this.taskService.removerTask(id).subscribe(task => {
      this.task = new TaskModel();
      this.list();
      
    }, err =>{
      console.log("Erro ao excluir task", err) 
    })
  }

  list(){
    this.taskService.listarAllTasks().subscribe(tasks => {
    this.tasks = tasks;

    this.tasks.sort(function (x,y){
      return y.active - x.active  
    });

    
    }, err => {
      console.log('Erro ao listar task', err)
    })
  }  
  



  create(){
    
    this.taskService.CreateTask(this.task).subscribe(task => {
     
      console.log("Criar task", task);
        this.list()

     
    }, err =>{
      console.log("Erro ao criar task", err) 
    })
  }
  
  ChangeState(task : TaskModel){
    task.active = !task.active
    this.taskService.desativarTask(task).subscribe(task => {
      console.log("TASK MUITO DEPOIS", this.task) 
      this.list();
    }, err =>{
      console.log("Erro ao desativar task", err) 
    })
  } 
}
