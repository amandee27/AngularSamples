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
  val:string="";
  editIndex:number=-1;
  addToDo(activity:string){
    this.todoes.push(activity);
    console.log(this.todoes);
    console.log(this.todoes.length);
  }

  edit(todoIndex:number){
    this.editIndex=todoIndex;
    console.log(todoIndex);
    this.val=this.todoes[this.editIndex];
  }
  done(updateName:string){
    this.todoes[this.editIndex]=this.val;
    this.val="";
    this.editIndex=-1;
    console.log(updateName);
  }

  delete(todo:string){
    console.log(this.todoes.indexOf(todo));
    var index=this.todoes.indexOf(todo);
    this.todoes.splice(index, 1); //remove an 1 element from arraya starting from index 
    console.log(this.todoes);
  }
}
