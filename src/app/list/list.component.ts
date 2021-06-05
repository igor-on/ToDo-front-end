import { Component, OnInit } from '@angular/core';
import { List, ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lists: List[];

  constructor(private service: ListService) { }


  getAllLists(){
    this.service.getAllLists().subscribe( val => this.lists = val )
  }

  ngOnInit(): void {
    this.getAllLists()
  }

}
