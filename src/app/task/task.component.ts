import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Task, TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, OnChanges {

  tasks: Task[] = [];
  tasksInList: Task[] = [];
  @Input() list = null;

  constructor(private service: TaskService) { }

  getAllTasks(): void {
    this.service.getAllTasks().subscribe(val => this.tasks = val)
  }

  check(): void {
    console.log(this.tasks);
  }

  ngOnInit(): void {
    this.getAllTasks();
    console.log(this.tasks);
    console.log(this.list);
  }

  ngOnChanges(): void {
    console.log(this.list)
    this.tasksInList = this.tasks.filter( val => val.list.id == this.list.id)
  }

}
