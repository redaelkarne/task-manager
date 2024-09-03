import { Injectable } from '@angular/core';
import { TaskList } from '../model/task-list.model';
import { Task } from '../model/task.model';
import { ICRUDTaskListService } from './crud-task-list.service.interface';

@Injectable({
  providedIn: 'root'
})
export class CRUDTaskListService implements ICRUDTaskListService {
  private taskList: TaskList = new TaskList([]);

  constructor() {
    // Initial tasks can be added here if necessary
  }

  getAllTasks(): TaskList {
    return this.taskList;
  }

  addTask(task: Task): void {
    this.taskList.tasks.push(task);
  }

  updateTask(updatedTask: Task): void {
    const index = this.taskList.tasks.findIndex(task => 
      task.title === updatedTask.title && task.description === updatedTask.description
    );
    if (index !== -1) {
      this.taskList.tasks[index] = updatedTask;
    }
  }

  deleteTask(title: string, description: string): void {
    this.taskList.tasks = this.taskList.tasks.filter(task => 
      task.title !== title || task.description !== description
    );
  }
}