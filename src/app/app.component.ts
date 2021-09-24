import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';

  todo = "";
  todoArray:any = []

  addToDo() {
    if(this.todo != ""){
      this.todoArray.push(this.todo);
    }
  }
}
