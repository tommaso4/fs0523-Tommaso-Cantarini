import { Injectable } from '@angular/core';
import { ITodos } from './Modules/itodos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiUrl:string = 'http://localhost:3000/todos'

  getAll():Promise<ITodos[]>{
    return fetch(this.apiUrl).then(res => res.json())
  }

  create(todo:Partial<ITodos>):Promise<ITodos> {
    return fetch(this.apiUrl,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(todo),
    }).then(res => res.json())
  }

  delate(id:string):Promise<ITodos>{
    return fetch(this.apiUrl+`/${id}`,{
      method: 'DELETE',
      headers:{
        'Content-Type':'application/json'
      }}).then(res => res.json())
  }

  updateCompletedStatus(todo: ITodos): Promise<ITodos> {
    const url = `${this.apiUrl}/${todo.id}`;
    return fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: todo.completed }),
    }).then((res) => res.json());
  }

}


