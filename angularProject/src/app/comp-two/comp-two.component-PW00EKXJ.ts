import { Component, Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent {

  @Input() inputData?: string;

  compTwoNumber ?:number;

  @Output() compTwoNumberOutput : any = new EventEmitter();

  EmitOutput(){
    this.compTwoNumberOutput.emit(this.compTwoNumber);
  }


}
