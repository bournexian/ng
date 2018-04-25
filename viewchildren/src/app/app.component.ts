import { Component, QueryList, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'app';

  @ViewChildren(ChildComponent)
  childComps: QueryList<ChildComponent>

  ngAfterViewInit(){
    console.dir(this.childComps);
  }
}
