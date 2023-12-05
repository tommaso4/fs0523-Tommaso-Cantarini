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
  loading = false;

  constructor(private todosSvc: TodosService) { }

  ngOnInit() {
    this.loading = true;
    this.todosSvc.getAll().then(todos => {
      this.todos = todos
      this.loading = false;
    })
  }

  createTodos() {
    this.loading = true;
    const newTodo: ITodos = { ...this.todo }
    this.todosSvc.create(newTodo)
      .then(res => {
        this.todos = [...this.todos, res];
        this.loading = false;
      });

    this.todo.title = ''
  }

  delate(id: string) {
    this.loading = true;

    this.todosSvc.delate(id).then(() => {
      this.todos = this.todos.filter(td => td.id !== Number(id));
      this.loading = false;
    });
  }

  toggleCompleted(todo: ITodos) {
    this.loading = true;
    todo.completed = !todo.completed;

    this.todosSvc.updateCompletedStatus(todo)
      .then(()=>{
      this.loading = false;
      });
  }

}
