import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private url = 'http://localhost:8000/list'

  constructor(private http: HttpClient) {}

  public getAllLists(): Observable<List[]>{
    return this.http.get<List[]>(this.url);
  }
}

export interface List {
  id: number,
  name: string
}

