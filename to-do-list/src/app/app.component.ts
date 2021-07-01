import { Component } from '@angular/core';

interface Todo {
  text: string;
  isCompleted: boolean;
  priority: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do-list';
  todoes:string[]=[];
  todoItems:Todo[] = [];
  count:number=this.todoes.length;
  val:string="";
  valInit:string="";
  editIndex:number=-1;
  priority=[{text:"High", val:"high"}, {text:"Medium", val:"medium"}, {text:"Low", val:"low"}];
  selected="medium";
  addToDo(activity:string){
    this.todoItems.push({ text: activity, isCompleted: false, priority:this.selected });
    console.log(this.todoItems);
    this.valInit="";
  }

  edit(todoIndex:number){
    console.log(todoIndex);
    this.editIndex=todoIndex;
    this.val=this.todoItems[this.editIndex].text;
  }
  done(updateName:string){

    this.todoItems[this.editIndex].text=this.val;
    this.val="";
    this.editIndex=-1;
    console.log(updateName);
  }

  delete(index:number){
    this.todoItems.splice(index, 1); //remove an 1 element from arraya starting from index 
    console.log(this.todoes);
  }
}
