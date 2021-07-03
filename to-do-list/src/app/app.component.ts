import { Component } from '@angular/core';
import { DatabaseService } from './database.service';

export interface Todo {
  text: string;
  isCompleted: boolean;
  priority: string;
  checked: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _database: DatabaseService) {}

  ngOnInit() {
    let loadedStringObject = this._database.getData();
    if (loadedStringObject !== null) {
      this.todoItems = loadedStringObject;
      return;
    }
    this.todoItems = [];
  }
  title = 'to-do-list';
  todoes: string[] = [];
  todoItems: Todo[] = [];
  count: number = this.todoes.length;
  val: string = '';
  valInit: string = '';
  editIndex: number = -1;
  priority = [
    { text: 'High', val: 'high' },
    { text: 'Medium', val: 'medium' },
    { text: 'Low', val: 'low' },
  ];
  priorityVal: string=''
  selected = 'medium';
  addToDo(activity: string) {
    if (this.valInit !== '') {
      this.todoItems.push({
        text: activity,
        isCompleted: false,
        priority: this.selected,
        checked: false,
      });
    }
    this.valInit = '';
    this._database.saveData(this.todoItems);
  }

  edit(todoIndex: number) {
    this.editIndex = todoIndex;
    this.val = this.todoItems[this.editIndex].text;
    this.priorityVal=this.todoItems[this.editIndex].priority;
  }
  done(updateName: string) {
    this.todoItems[this.editIndex].text = this.val;
    this.todoItems[this.editIndex].priority= this.priorityVal;
    this.val = '';
    this.priorityVal='';
    this.editIndex = -1;
    this._database.saveData(this.todoItems);
  }

  delete(index: number) {
    this.todoItems.splice(index, 1); //remove an 1 element from arraya starting from index
    this._database.saveData(this.todoItems);
  }

  cancel(){
    this.priorityVal='';
    this.editIndex = -1;
  }

  checkItem(event: Event, index:number){
    this.todoItems[index].checked=(event.target as HTMLInputElement).checked;
    console.log(this.todoItems[index].checked);
    this._database.saveData(this.todoItems);
  }
}
