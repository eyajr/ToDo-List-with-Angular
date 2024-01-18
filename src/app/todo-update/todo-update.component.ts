import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent {

@Input() todo!:Todo

constructor(public TodoService: TodoService){}
  updateTodo(){
    this.TodoService.updateTodo(this.todo).subscribe(
      response=>window.location.reload()
    )
    this.TodoService.todoDetailShowModal=false
  }



}
