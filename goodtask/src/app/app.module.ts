import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasklistTaskListComponent } from './tasklist-task-list/tasklist-task-list.component';
import { TaskModel } from './model/TaskModel';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TasklistTaskListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    AppRoutingModule
  ],
  providers: [HttpClientModule, TaskModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
