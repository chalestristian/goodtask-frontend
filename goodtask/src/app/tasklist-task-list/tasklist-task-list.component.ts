import { Component } from '@angular/core';
import { TaskModel } from '../model/TaskModel';
import { GoodtaskService } from '../service/goodtask.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-tasklist-task-list',
  templateUrl: './tasklist-task-list.component.html',
  styleUrls: ['./tasklist-task-list.component.css']
})
export class TasklistTaskListComponent {
  task: TaskModel = new TaskModel();
  tasks: Array<any> = new Array();
  sorting: Array<any> = new Array();
  taskForm = new FormGroup(
    {
      task: new FormControl(''),
    });
  
  showToast = false;
  titleToast = "";
  messageToast = "";

  



  constructor(public taskService: GoodtaskService) { }

 
  ngOnInit() {
    this.list();
    

  }

  update(task: TaskModel) {
    this.task.id = task.id;
    this.task.task = task.task;
    this.task.active = task.active;

    this.taskService.UpdateTask(this.task).subscribe(task => {
      this.task = new TaskModel();
      this.list();

    }, err => {
      console.log("Erro ao atualizar task", err)
    })
  }

  remove(id: number) {
    this.taskService.RemoveTask(id).subscribe(task => {
      this.task = new TaskModel();
      this.list();

    }, err => {
      console.log("Erro ao excluir task", err)
    })
  }

  list() {
    this.taskService.ListTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.task = new TaskModel();

      this.tasks.sort(function (x, y) {
        return y.active - x.active
      });


    }, err => {
      console.log('Erro ao listar task', err)
    })
  }

  create() {
    this.task.task = String(this.taskForm.value.task);
    
    let erro = String(`titleToast: ${this.titleToast} message: ${this.messageToast}`)
    let validate = this.task.task.trim()
   
    if(validate == "" || validate == "null" || validate.length<=0){
      this.showToast = true;
      this.titleToast = "Error:"
      this.messageToast = "Task can't be empty"
      
      setTimeout(() => {this.showToast = false;}, 4000)

      throw new Error(erro);
    }

    this.taskForm.reset();

    this.taskService.CreateTask(this.task).subscribe(task => {
      this.list();
    }, err => {
      throw new Error(erro);
    })
  }

  state(task: TaskModel) {
    task.active = !task.active
    this.taskService.ChangeState(task).subscribe(task => {
      console.log("TASK MUITO DEPOIS", this.task)
      this.list();
    }, err => {
      console.log("Erro ao desativar task", err)
    })
  }
}