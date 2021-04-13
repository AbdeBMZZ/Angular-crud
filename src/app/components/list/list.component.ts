import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public todos:Array<Todo>;
  public todosD:Array<Todo>;
  constructor(private service:ServiceService) { 
    this.todos = new Array<Todo>();
    this.todosD = new Array<Todo>();

    service.gettodos().subscribe(
      data=>{
        this.todos = data;
      }
    )

    service.getTodoWithId("1").subscribe(
      data=>{
        this.todosD = data;
      }
    )
  }

  ngOnInit(): void {
  }

}
