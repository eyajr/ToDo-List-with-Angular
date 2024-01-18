import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-template-driven-form',
  templateUrl: './todo-template-driven-form.component.html',
  styleUrls: ['./todo-template-driven-form.component.css']
})
export class TodoTemplateDrivenFormComponent implements OnInit {

  todo:Todo={
  id:0,
  title:"",
  date:new Date(),
  description:"",
  done:false
  }


  constructor(public Todoservice:TodoService){}

    id:number=0

    ngOnInit(): void{
      this.Todoservice.getTodoList().subscribe(
      response=>this.id=response.length+1
        )
    }

addTodo(todo:Todo){
  this.Todoservice.todoaddShowModal=false
  this.Todoservice.addTodo({...this.todo, id:this.id}).subscribe(
    response=>window.location.reload()
  )
}


}
