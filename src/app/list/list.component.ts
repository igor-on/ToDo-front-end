import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { List, ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lists: List[];
  @Output() selectedListEvent = new EventEmitter<List>();

  constructor(private service: ListService) { }


  getAllLists() {
    this.service.getAllLists().subscribe(val => this.lists = val)
  }

  chooseList(list: List): void {
    this.selectedListEvent.emit(list)
  }

  deleteList(list: List): void {
    this.selectedListEvent = null
    this.lists = this.lists.filter(val => val.id != list.id)
  }

  ngOnInit(): void {
    this.getAllLists()
  }

}
