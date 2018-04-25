import { Component, ElementRef, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>view child practice</h1>
    <p #greet>Hello {{name}}</p>
    <app-child></app-child>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  name: string = 'test';

  @ViewChild('greet') greetElm: ElementRef;

  ngAfterViewInit(){
    console.dir(this.greetElm);
    [].forEach.call(this.greetElm.nativeElement.childNodes, (elemNode)=>{
      console.dir(elemNode);
    });

    console.dir(this.childComp.childProperty);
  }

  @ViewChild(ChildComponent) childComp: ChildComponent;


}
