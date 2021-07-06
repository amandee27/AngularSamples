import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  constructor() {}
  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: MouseEvent) {
    //console.log('handleDocumentClick');
    //console.log(this.todoItemContainer);
    // if (this.todoItemContainer?.nativeElement.contains(event.target as Node)) {
    //   console.log('native Element');
    //   this.isEdit = false;
    // }
  }

  @Input()
  todoItem?: Todo;
  @Output() update = new EventEmitter<Todo>();

  @Output() delete = new EventEmitter<void>();

  val: string = '';
  priorityVal: string = '';
  priority = [
    { text: 'High', val: 'high' },
    { text: 'Medium', val: 'medium' },
    { text: 'Low', val: 'low' },
  ];

  isEdit: boolean = false;
  @ViewChild('todoItemContainer')
  todoItemContainer?: ElementRef<HTMLElement>;

  handleEditItem() {
    if (this.todoItem !== undefined) {
      this.isEdit = true;
      this.val = this.todoItem.text;
      this.priorityVal = this.todoItem.priority;
    }
  }
  handleDone() {
    if (this.todoItem !== undefined) {
      this.todoItem.text = this.val;
      this.todoItem.priority = this.priorityVal;
      this.update.emit(this.todoItem);
      this.isEdit = false;
    }

    //this._database.saveData(this.todoItems);
  }

  handleDeleteItem() {
    this.delete.emit();
  }

  handleCancel() {
    this.isEdit = false;
  }

  handleCheckItem(event: Event) {
    if (this.todoItem !== undefined) {
      this.todoItem.checked = (event.target as HTMLInputElement).checked;
      console.log(this.todoItem.checked);
      this.update.emit(this.todoItem);
    }

    // this.update.emit([this.todoItems[index], index]);
  }
}
