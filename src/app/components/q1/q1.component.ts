import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css']
})
export class Q1Component  {

  title = 'question1';
  answer =0;




 generateAns(event: any) {
	var userValue = event.target.value;
  if(userValue%2===0){
    this.answer=( userValue*userValue)  -1;
  }
  else{
    this.answer= (userValue*userValue)  +1;
  }
  
 }

}
