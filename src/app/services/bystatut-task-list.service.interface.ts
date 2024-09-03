// src/app/services/bystatut-task-list.service.interface.ts
import { TaskList } from '../model/task-list.model';
import { Task } from '../model/task.model';

export interface ICRUDTaskListService {
  getAllTasks(): TaskList;
  addTask(task: Task): void;
  updateTask(updatedTask: Task): void;
  deleteTask(title: string, description: string): void; // Match the method signature used
}