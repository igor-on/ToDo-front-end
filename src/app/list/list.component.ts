import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { List, ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lists: List[];
  @Output() selectedListEvent = new EventEmitter<List>();
  @Output() listErrorAlertEvent = new EventEmitter<string>();

  constructor(private service: ListService) { }


  getAllLists() {
    this.service.getAllLists().subscribe(val => this.lists = val)
  }

  chooseList(list: List): void {
    this.selectedListEvent.emit(list)
  }

  addList(list: List): void {
    this.service.addList(list).subscribe(val => {
      console.log(val)
      this.lists.push(val)
    }, err => {
      this.listErrorAlertEvent.emit("Something went wrong...")
      console.log(err.error.error)
      console.log(err.error.status)
    })
  }

  deleteList(list: List): void {
    this.service.deleteList(list.id).subscribe( () => {
      console.log('deleted')
      this.selectedListEvent.emit(null)
      this.lists = this.lists.filter(val => val.id != list.id)
    }, err => {
      console.log(err.error.error)
      console.log(err.error.status)
    })
  }

  ngOnInit(): void {
    this.getAllLists()
  }
}
