import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ListService } from '../list.service';
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
    console.log(this.tasks);
    console.log(this.list);
  }

  ngOnChanges(): void {
    // console.log(this.list)
    if(this.list === null) {
      this.tasksInList = []
    } else {
      this.tasksInList = this.tasks.filter( val => val.listId == this.list.id)
    }
  }

}
