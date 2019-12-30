import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beeckmans2',
  templateUrl: './beeckmans2.component.html',
  styleUrls: ['./beeckmans2.component.css']
})
export class Beeckmans2Component implements OnInit {

  newTodo: string;
    todos: any;
    todoObj: any;

    color: string;

    constructor() {
      this.newTodo = '';
      this.todos = [];
    }

  ngOnInit() {
  }

  addTodo(event) {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false
    }
    this.todos.push(this.todoObj);
    this.newTodo = '';
    event.preventDefault();
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }

  deleteSelectedTodos() {
    //need ES5 to reverse loop in order to splice by index
    for(var i=(this.todos.length -1); i > -1; i--) {
      if(this.todos[i].completed) {
        this.todos.splice(i, 1);
      }
    }
  }

  Changecolor(color:string){
    this.color = color
}

  

}

export class Todo {
  id: number;
  title: string = '';
  complete: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
