import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../app/model/task-list.model';
import { Task, TaskState } from '../../app/model/task.model';
import { CRUDTaskListService } from '/Users/redaa/task-manager/src/app/services/crud-task-list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskList!: TaskList;
  archivedTasks!: TaskList;

  constructor(
    private crudTaskListService: CRUDTaskListService
  ) {}

  ngOnInit(): void {
    // Initialize the task list with predefined tasks
    this.taskList = this.crudTaskListService.getAllTasks();
    this.taskList = new TaskList([
      new Task('Tâche 1', 'Description de la tâche 1', TaskState.A_FAIRE),
      new Task('Tâche 2', 'Description de la tâche 2', TaskState.EN_COURS),
      new Task('Tâche 3', 'Description de la tâche 3', TaskState.TERMINEE)
    ]);
    // Populate the service with initial tasks
    this.crudTaskListService.addTask(new Task('Tâche 1', 'Description de la tâche 1', TaskState.A_FAIRE));
    this.crudTaskListService.addTask(new Task('Tâche 2', 'Description de la tâche 2', TaskState.EN_COURS));
    this.crudTaskListService.addTask(new Task('Tâche 3', 'Description de la tâche 3', TaskState.TERMINEE));

   

    console.log('TaskListComponent Initialized with TaskList:', this.taskList);
    console.log('Archived Tasks:', this.archivedTasks);
  }
}