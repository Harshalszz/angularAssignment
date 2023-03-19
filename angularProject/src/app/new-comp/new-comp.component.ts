import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent  implements  OnInit{
  
  
  todo: Todo[] = []
  constructor(private todoService: TodoService) { }
  
 

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo(): void {
    this.todoService.getTodo()
    .subscribe(todo => this.todo = todo);
  }

  


}
