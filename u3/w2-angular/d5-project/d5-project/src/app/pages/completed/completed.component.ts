import { Component } from '@angular/core';
import { TodosService } from '../../todos.service';
import { ITodos } from '../../Modules/itodos';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})

export class CompletedComponent {
  todo: ITodos = { id: 0, title: '', completed: false };
  todos: ITodos[] = [];

  constructor(private todosSvc: TodosService) { }

  ngOnInit() {
    this.todosSvc.getAll().then(todos => this.todos = todos.filter(td => td.completed === true));
  }

  delate(id: string) {
    this.todosSvc.delate(id).then(() => {
      this.todos = this.todos.filter(td => td.id !== Number(id))
    })
  }

  toggleCompleted(todo: ITodos) {
    todo.completed = !todo.completed;

    this.todos = this.todos.filter(td => td.id !== todo.id)

    this.todosSvc.updateCompletedStatus(todo)
      .then();
  }

}
