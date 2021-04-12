import { Component, OnInit } from '@angular/core';
import{Todo} from './../../models/Todo'
// le premier point c le doc entier le second c'est src le troisieme c app (AngularTodoApp=>SRC=>APP=>MODELS=>TODO)
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  inputTodo: string = "";
 
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'second todo',
        completed: true
      }
    ]

  }

  toggleDone(id:number){
    this.todos.map((v, i)=> {
      if (i == id ) v.completed = !v.completed;
      return v;
    })
  }

  deleteTodo (id:number){
    this.todos = this.todos.filter((v, i)=> i !== id);
  }

  addTodo(){
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })
    this.inputTodo ="";
  }

}

/*TODO*/

/* - add fontawesome to use the recycle bin image for remove
   - add a swipe functionality (if the user swipe right it means the task is done)*/
