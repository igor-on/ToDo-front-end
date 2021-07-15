import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private url = 'http://localhost:8080/api/lists'
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) {}

  public getAllLists(): Observable<List[]>{
    return this.http.get<List[]>(this.url);
  }

  public addList(list: List): Observable<List>{
    return this.http.post<List>(this.url, list, this.httpOptions);
  }

  public deleteList(id: number): Observable<void> {
    const url = `${this.url}/${id}`;
    return this.http.delete<void>(url)
  }
}

export interface List {
  id: number,
  name: string
}

