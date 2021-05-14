import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

  @Input() todo:Todo;
  @Output() todoDelete: EventEmitter<Todo>=new EventEmitter();


  constructor() { }

  ngOnInit(): void {

  }

  onClick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("Onclick")
  }


}
