import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { List } from 'src/app/list.service';
import { Task } from 'src/app/task.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() list: List;
  @Output() addTaskEvent = new EventEmitter<Task>();

  constructor() { }

  addTask(task: Task): void {
    this.addTaskEvent.emit(task);
  }
  
  ngOnInit(): void {

  }
}
