import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() add = new EventEmitter<Todo>();

  valInit: string = '';
  selected = 'medium';
  priority = [
    { text: 'High', val: 'high' },
    { text: 'Medium', val: 'medium' },
    { text: 'Low', val: 'low' },
  ];

  addItem(activity: string) {
    if (activity !== '') {
      let item: Todo = {
        text: activity,
        priority: this.selected,
        checked: false,
      };
      this.add.emit(item);
      this.valInit = '';
    }
  }
}
