import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProject';

  inputData1?:string;



  num1 : number = 0;
  num2 :number = 0;

  sum :number =0 ;

  

  

  onAddNum(cInput1: number){
    this.num1 = cInput1;
  }

  onAddNum1(cInput1: number){
    this.num2 = cInput1;
    this.addNumber()
  }

  addNumber(){

    this.sum=this.num1+this.num2;

  }



  
}
