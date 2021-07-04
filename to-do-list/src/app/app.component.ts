import { Component } from '@angular/core';
import { DatabaseService } from './services/database.service';
import { Todo } from './models/todo';

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
  editIndex: number = -1;

  priorityVal: string = '';
  selected = 'medium';
  handleAddItem(item: Todo) {
    this.todoItems.push(item);
    this._database.saveData(this.todoItems);
    console.log(this.todoItems);
  }

  handleDelete(index: number) {
    this.todoItems.splice(index, 1); //remove an 1 element from arraya starting from index
    this._database.saveData(this.todoItems);
  }

  cancel() {
    this.editIndex = -1;
  }

  handleUpdate(todoWithIndex: [Todo, number]) {
    this.todoItems[todoWithIndex[1]] = todoWithIndex[0];
    this._database.saveData(this.todoItems);
  }
}
