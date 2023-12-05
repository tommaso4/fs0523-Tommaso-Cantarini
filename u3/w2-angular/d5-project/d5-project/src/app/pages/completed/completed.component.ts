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
  loading:boolean = false;

  constructor(private todosSvc: TodosService) { }

  ngOnInit() {
    this.loading = true;
    this.todosSvc.getAll().then(todos => {
      this.todos = todos.filter(td => td.completed === true)
      this.loading = false;
    });
  }

  delate(id: string) {
    this.loading = true;
    this.todosSvc.delate(id).then(() => {
      this.todos = this.todos.filter(td => td.id !== Number(id))
      this.loading = false;
    })
  }

  toggleCompleted(todo: ITodos) {

    this.loading = true;
    todo.completed = !todo.completed;
    this.todos = this.todos.filter(td => td.id !== todo.id)

    this.todosSvc.updateCompletedStatus(todo)
      .then(()=>{
      this.loading = false;
      });
  }

}
