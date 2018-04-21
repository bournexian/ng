import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  initialCount: number = 10;
  changeMsg: string;
  go(){
    this.initialCount++;
  }
}
