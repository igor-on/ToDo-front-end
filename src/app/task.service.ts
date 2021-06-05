import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from './list.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url = `http://localhost:8000/tasks`;

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }
}

export interface Task {
  id: number
  task: string
  complete: string
  actualTime: string
  list: List
}
