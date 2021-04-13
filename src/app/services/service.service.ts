import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private todos:Array<Todo>;

  constructor(private httpClient:HttpClient) {
    this.todos = new Array<Todo>();
    this.todos.push(new Todo(1,"monday", "go to gym"));
    this.todos.push(new Todo(2,"saturday", "take a shower"));

  }
   
  getLastID():any{
    return this.todos.length;
  }
  gettodos():Observable<any>{
    return this.httpClient.get("http://localhost:3000/todo");
  }

  getTodoWithId(id:string):Observable<any>{
    let param = new HttpParams().set('id',id);
    return this.httpClient.get("http://localhost:3000/todo", {params:param});

  }

  public addTodo(todo:Todo):Observable<any>{
//    this.todos.push(todo);
    return this.httpClient.post("http://localhost:3000/todo",todo);
  }

}
