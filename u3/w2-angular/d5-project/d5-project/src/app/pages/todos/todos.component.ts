import { Component } from '@angular/core';
import { ITodos } from '../../Modules/itodos';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {

  todo: ITodos = { id: 0, title: '', completed: false };
  todos: ITodos[] = [];

  constructor(private todosSvc: TodosService) { }

  ngOnInit() {
    this.todosSvc.getAll().then(todos => this.todos = todos)
  }

  createTodos() {
    const newTodo: ITodos = { ...this.todo }
    this.todosSvc.create(newTodo)
      .then(res => {
        this.todos = [...this.todos, res];
      });

    this.todo.title = ''
  }

  delate(id:string){
    this.todosSvc.delate(id).then(() => {
      this.todos = this.todos.filter(td =>  td.id !== Number(id))
    })
  }

  toggleCompleted(todo: ITodos) {
    todo.completed = !todo.completed;

    this.todosSvc.updateCompletedStatus(todo)
      .then();
  }

}
