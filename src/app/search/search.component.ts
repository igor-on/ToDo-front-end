import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { List } from '../list.service';
import { Task } from '../task.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() tasks = null;
  @Output() listEvent = new EventEmitter<List>();
  @Output() tasksToListEvent = new EventEmitter<Task[]>();

  constructor() { }
  
  public searchTasks(key: string): void {
    console.log(key);
    let results: Task[] = [];
    for (const task of this.tasks) {
      if (task.name.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(task);
      }
    }

    console.log(results)

    if (results.length === 0 || !key) {
      results = [];
    }

    this.listEvent.emit(null)
    this.tasksToListEvent.emit(results)
  }
  
  ngOnInit(): void {
  }
}
