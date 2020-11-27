import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q4',
  templateUrl: './q4.component.html',
  styleUrls: ['./q4.component.css']
})
export class Q4Component {
  title = 'question4';
  text='Change the value by using centered input';
  myMethod(value){
    this.text=value;
  }
}
