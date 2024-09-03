

import { Component, Input, OnInit } from '@angular/core';
import { Task, TaskState } from '../../app/model/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;  

  constructor() {}

  ngOnInit(): void {
    console.log('TaskComponent Initialized with Task:', this.task);
  }
}

