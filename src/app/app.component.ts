import { Component } from '@angular/core';
import { List } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp';
  selectedList = null;
  errorAlert = null;

  getList(listFromEvent: List) {  
    this.selectedList = listFromEvent;
  }

  getErrorAlert(errAlertFromEvent: string) {
    this.errorAlert = errAlertFromEvent;
  }
}
