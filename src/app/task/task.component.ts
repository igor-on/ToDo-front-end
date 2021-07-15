import { HttpErrorResponse } from '@angular/common/http';
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
  @Input() errorAlert: string = null;
  @Input() list = null;

  constructor(private service: TaskService) { }

  getAllTasks(): void {
    this.service.getAllTasks().subscribe(val => this.tasks = val)
  }
  
  addTask(taskFromEvent: Task): void {
    this.service.addTask(taskFromEvent).subscribe(val => {
      console.log(val)
      this.tasks.push(val)
      this.tasksInList = this.tasks.filter( val => val.listId == this.list.id)
    }, (err: HttpErrorResponse) => {
      if(this.list == null) {
            this.errorAlert = 'Select list first V2'
      } else {
        this.errorAlert = 'Wrong task name'
      }
      console.log(err.error.error)
      console.log(err.error.status)
    })
  }
  
  deleteTask(task: Task): void {
    this.service.deleteTask(task.id).subscribe( val => {
      console.log('deleted')
      this.tasks = this.tasks.filter( val => val.id != task.id)
      this.tasksInList = this.tasks.filter( val => val.listId == this.list.id)
    }, err => {
      console.log(err.error.error)
      console.log(err.error.status)
    })
  }

  isComplete(task: Task): string {
    if(task.complete === "YES") return "complete" 
  }
  
  changeToComplete(task: Task){
    const id = this.tasks.indexOf(task)
    const id2 = this.tasksInList.indexOf(task)
    this.tasks[id].complete = "YES" 
    // this.tasksInList[id2].complete = "YES" 
    // document.getElementById(`single-task-${task.id}`).classList.add(`complete`)
    console.log('Zmieniam')
  }

  ngOnInit(): void {
    this.getAllTasks();
  }

  ngOnChanges(): void {
    console.log(this.list)
    console.log(this.errorAlert);
    if(this.list === null) {
      this.tasksInList = []
    } else {
      this.tasksInList = this.tasks.filter( val => val.listId == this.list.id)
    }
  }

}
