import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { Task, TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, OnChanges {

  @Output() allTasksEvent = new EventEmitter<Task[]>();
  tasks: Task[] = [];
  @Input() tasksFromSearch: Task[] = null;
  tasksInList: Task[] = [];
  @Input() errorAlert: string = null;
  @Input() list = null;

  constructor(private service: TaskService) { }

  getAllTasks(): void {
    this.service.getAllTasks().subscribe(val => {
      this.tasks = val
      this.allTasksEvent.emit(this.tasks)
    })
  }

  addTask(taskFromEvent: Task): void {
    this.service.addTask(taskFromEvent).subscribe(val => {
      console.log(val)
      this.tasks.push(val)
      this.updateTasksInlist()
    }, (err: HttpErrorResponse) => {
      if (this.list == null) {
        this.errorAlert = 'Select list first V2'
      } else {
        this.errorAlert = 'Wrong task name'
      }
      console.log(err.error.error)
      console.log(err.error.status)
    })
  }

  updateTasksInlist(): void {
    this.tasksInList = this.tasks.filter(val => val.listId == this.list.id)
  }

  deleteTask(task: Task): void {
    this.service.deleteTask(task.id).subscribe(val => {
      console.log('deleted')
      this.filterTasks(task)
      this.updateTasksInlist()
    }, err => {
      console.log(err.error.error)
      console.log(err.error.status)
    })
  }
  
  filterTasks(deletedTask: Task): void {
    this.tasks = this.tasks.filter(val => val.id != deletedTask.id)
  }
  
  isComplete(task: Task): string {
    if (task.complete === "YES") return "complete"
  }

  changeToComplete(task: Task) {
    this.service.changeToComplete(task.id).subscribe(val => {
      console.log(`--Task: "${task.name}" updated to completed--`);
      const id = this.tasks.indexOf(task)
      this.tasks[id].complete = "YES"
    }, err => {
      this.errorAlert = err.error.error;
      console.log(err.error.error);
      console.log(err.error.status);
    })
  }

  deleteAllCompleted() {
    this.service.deleteAllCompleted().subscribe(val => {
      console.log('----All completed deleted----')
      this.tasks = this.tasks.filter(val => val.complete === 'NO')
      this.updateTasksInlist()
    })
  }

  ngOnInit(): void {
    this.getAllTasks();
  }

  ngOnChanges(): void {
    console.log('Actual used list:')
    console.log(this.list)
    console.log('Actual errorAlert:')
    console.log(this.errorAlert);
    if (this.list === null) {
      this.tasksInList = []
      this.tasksInList = this.tasksFromSearch
    } else {
      this.updateTasksInlist()
    }
  }
}
