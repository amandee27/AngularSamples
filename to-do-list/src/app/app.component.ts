import { Component } from '@angular/core';

interface Todo {
  text: string;
  isCompleted: boolean;
  priority: string;
  checked: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngOnInit() {
    var loadedStringObject=localStorage.getItem("dataItems");
    console.log(typeof(loadedStringObject));
    console.log(loadedStringObject);
    var newObj=JSON.parse(JSON.stringify(loadedStringObject));
    console.log(typeof(newObj));
    console.log(JSON.parse(newObj));
    var obj2=JSON.parse(newObj);
    console.log(typeof(obj2));
    this.todoItems=obj2;
  }
  title = 'to-do-list';
  todoes:string[]=[];
  todoItems:Todo[] = [];
  count:number=this.todoes.length;
  val:string="";
  valInit:string="";
  editIndex:number=-1;
  priority=[{text:"High", val:"high"}, {text:"Medium", val:"medium"}, {text:"Low", val:"low"}];
  selected="medium";
  checked=false;
  addToDo(activity:string){
    this.checked=false;
    if(this.valInit!==""){
      this.todoItems.push({ text: activity, isCompleted: false, priority:this.selected, checked:this.checked });
    }
    this.valInit="";
    localStorage.setItem("dataItems", JSON.stringify(this.todoItems));
  }

  edit(todoIndex:number){
    this.editIndex=todoIndex;
    this.val=this.todoItems[this.editIndex].text;
  }
  done(updateName:string){
    this.todoItems[this.editIndex].text=this.val;
    this.val="";
    this.editIndex=-1;
    localStorage.setItem("dataItems", JSON.stringify(this.todoItems));
  }

  delete(index:number){
    this.todoItems.splice(index, 1); //remove an 1 element from arraya starting from index
    localStorage.setItem("dataItems", JSON.stringify(this.todoItems));
  }
}
