import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';

  todo = "";
  todoArray:string[] = []

  addToDo() {
    if(this.todo != ""){
      this.todoArray.push(this.todo);
    }
  }

  deleteToDo(todoItem: string) {
    for(let i = 0; i < this.todoArray.length; i++)
    {
      if(todoItem == this.todoArray[i])
      {
        this.todoArray.splice(i, 1);
      }
    }    
  }
}
