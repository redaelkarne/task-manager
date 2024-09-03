import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';


import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';
import { AppComponent } from '../app/app.component';
import { TaskStatusColorDirective } from '../task-status-color.directive';
import { DateFormatPipe } from '../date-format.pipe';
import { MainTaskComponent } from './main-task/main-task.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [TaskListComponent, TaskComponent, TaskStatusColorDirective, DateFormatPipe, MainTaskComponent],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
