import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/Todo';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addForm = new FormGroup({
    title : new FormControl('',[Validators.required,Validators.minLength(3)]),
    description : new FormControl('',[Validators.required,Validators.minLength(10)])
  });
  public todosg:Array<Todo>;
  constructor(private service:ServiceService) {
    this.todosg = new Array<Todo>();

    console.log(this.service.getLastID());
  }

  ngOnInit(): void {
  }
  onSubmit() {
    
    let title = this.addForm.getRawValue().title.trim();
    let desc = this.addForm.getRawValue().description.trim();
    if(this.addForm.valid){
      this.service.addTodo(new Todo(7,title,desc)).subscribe(
        req=>{
          console.log("succesfull" + req);
        },
        error=>{
          console.log(error);
        }
      );


    }
    else
      console.log("no");

  }
}
