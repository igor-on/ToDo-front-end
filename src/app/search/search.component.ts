import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  public searchTasks(key: string): void {
    // console.log(key);
    // const results: ToDo[] = [];
    // for (const task of this.allTasks) {
    //   if (task.taskName.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
    //     results.push(task);
    //   }
    // }
    // this.selectedList = null;
    // this.tasksToList = results;
    // if (key === 'finished') {
    //   this.tasksToList = this.allTasks.filter((task: ToDo) => task.complete === 'YES')

    //   this.tasksToList.forEach(task => {
    //     const d1 = new Date(task.actualTime);
    //     console.log(d1)
    //   })
    // }
    // if (results.length === 0 || !key) {
    //   this.selectedList = null;
    // }
  }

  ngOnInit(): void {
  }

}
