import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do-list';
  todoes:string[]=[];
  count:number=this.todoes.length;
  editTodo:boolean=false;
  val:string="";
  addToDo(activity:string){
    this.todoes.push(activity);
    console.log(this.todoes);
    console.log(this.todoes.length);
  }

  edit(todo:string){
    console.log(todo);
    this.val=todo;
    this.editTodo=true;
  }
  done(updateName:string){
    this.editTodo=false;
    console.log(updateName);
  }

  delete(todo:string){
    console.log(this.todoes.indexOf(todo));
    var index=this.todoes.indexOf(todo);
    this.todoes.splice(index, 1); //remove an 1 element from arraya starting from index 
    console.log(this.todoes);
  }
}
