import { Task } from './task.model';

export class TaskList {
  tasks: Task[];

  constructor(tasks: Task[] = []) {
    this.tasks = tasks;
  }
}