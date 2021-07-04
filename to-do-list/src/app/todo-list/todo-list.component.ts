import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  todoItems: Todo[] = [];

  @Output() update = new EventEmitter<[Todo, number]>();

  @Output() delete = new EventEmitter<number>();

  handleUpate(item: Todo, index: number) {
    this.update.emit([item, index]);
  }

  handleDelete(index: number) {
    this.delete.emit(index);
  }
}
