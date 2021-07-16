import { Component } from '@angular/core';
import { List } from './list.service';
import { Task } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp';
  selectedList = null;
  errorAlert = null;
  tasksFromSearch = null;
  tasks = null;

  getList(listFromEvent: List) {  
    this.selectedList = listFromEvent;
  }

  getErrorAlert(errAlertFromEvent: string) {
    this.errorAlert = errAlertFromEvent;
  }

  getTasksFromSearch(tasks: Task[]) {
    this.tasksFromSearch = tasks;
  }

  getAllTasks(tasks: Task[]) {
    console.log(tasks)
    this.tasks = tasks;
  }
}
