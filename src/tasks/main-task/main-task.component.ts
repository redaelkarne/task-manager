import { Component, OnInit } from '@angular/core';
import { Task, TaskState } from '../../app/model/task.model';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-main-task',
  
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css']
})
export class MainTaskComponent implements OnInit {
  task!: Task;

  

  ngOnInit(): void {
   
    this.task = new Task(
      'Terminer le projet Angular',
      'Implémenter toutes les fonctionnalités nécessaires et corriger les bugs.',
      TaskState.EN_COURS
    );
  }
}