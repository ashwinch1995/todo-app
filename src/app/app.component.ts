import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';

  //todo = "";

  constructor(private fb: FormBuilder) {}

  todoForm = this.fb.group({
    todo: ['', Validators.required]
  });

  todoArray:string[] = []

  addToDo() {
    let value = this.todoForm.value.todo;

    if(value != ""){
      this.todoArray.push(value);
      this.todoForm.reset();
    }
    else{
      alert("Todo field required!");
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
