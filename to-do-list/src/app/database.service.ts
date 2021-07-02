import { Injectable } from '@angular/core';
import { Todo } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  saveData(todoItems: Todo[]) {
    localStorage.setItem('dataItems', JSON.stringify(todoItems));
  }

  getData(): Todo[] | null {
    var loadedStringObject = localStorage.getItem('dataItems');
    if (loadedStringObject !== null) {
      var obj = JSON.parse(loadedStringObject);
      return obj as Todo[];
    }
    return null;
  }
}
