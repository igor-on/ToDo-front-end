import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[];

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
  }

}
