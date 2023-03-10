import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasklistTaskListComponent } from './tasklist-task-list/tasklist-task-list.component';
import { TaskModel } from './model/TaskModel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    TasklistTaskListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [HttpClientModule, TaskModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
