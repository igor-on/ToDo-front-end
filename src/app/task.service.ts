import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url = `http://localhost:8080/api/tasks`;
  private httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.url, task, this.httpOptions)
  }

  deleteTask(id: number): Observable<void> {
    const url = `${this.url}/${id}`
    return this.http.delete<void>(url, this.httpOptions);
  }
}

export interface Task {
  id: number
  name: string
  complete: string
  date: string
  listId: number
}
