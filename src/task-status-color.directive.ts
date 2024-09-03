
import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { TaskState } from '../src/app/model/task.model';

@Directive({
  selector: '[appTaskStatusColor]',
})
export class TaskStatusColorDirective implements OnInit {
  @Input() appTaskStatusColor!: TaskState;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.updateColor();
  }

  private updateColor() {
    switch (this.appTaskStatusColor) {
      case TaskState.EN_COURS:
        this.el.nativeElement.style.color = 'blue';
        break;
      case TaskState.A_FAIRE:
        this.el.nativeElement.style.color = 'red';
        break;
      case TaskState.TERMINEE:
        this.el.nativeElement.style.color = 'green';
        break;
      default:
        this.el.nativeElement.style.color = 'black';
    }
  }
}

