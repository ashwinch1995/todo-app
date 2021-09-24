import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger("moveInLeft",[
     transition("void=> *",[style({transform:"translateX(300px)"}),
      animate(200,keyframes([
       style({transform:"translateX(300px)"}),
       style({transform:"translateX(0)"})
     ]))]),
     transition("*=>void",[style({transform:"translateX(0px)"}),
      animate(100,keyframes([
       style({transform:"translateX(0px)"}),
       style({transform:"translateX(300px)"})
      ]))]) 
     ])
  ]
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
