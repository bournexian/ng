import { Component, OnInit, Input, OnChanges, SimpleChange, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnChanges {
@Input() count: number = 0;
@Output() change = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  increment(){
    this.count++;
    this.change.emit(this.count);
  }
  decrement(){
    this.count--;
    this.change.emit(this.count);
  }
  
  ngOnChanges(changes){
    console.dir(changes['count']);
  }
}
