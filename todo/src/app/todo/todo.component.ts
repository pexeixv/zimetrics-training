import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

interface Todo {
  id: number;
  text: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  // constructor(AppComponent appComponent){

  // }
  ngOnInit() {
    console.log(AppComponent);
  }

  prevData: any = localStorage.getItem('todos');

  todoList: Todo[] = JSON.parse(this.prevData);

  addTodo(todoText: string) {
    if (!todoText) return;
    var newTodo: Todo = {
      id: this.todoList.length,
      text: todoText,
    };
    this.todoList.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(this.todoList));
  }

  removeTodo(id: number) {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(this.todoList));
  }
  // AppComponent.arr.push('1')
}
