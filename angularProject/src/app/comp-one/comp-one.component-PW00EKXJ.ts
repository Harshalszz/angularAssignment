import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent {

  @Input() inputData?: string;

  cOneInput?:number;

  @Output() outputEmit: any = new EventEmitter();

  EmitOutput(){
    this.outputEmit.emit(this.cOneInput);
  }

}
