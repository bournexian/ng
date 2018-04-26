import { Component, OnInit, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { ContentchildComponent } from '../contentchild/contentchild.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ContentChild(ContentchildComponent) contentChild: ContentchildComponent;

  @ContentChildren(ContentchildComponent) contentChildren: QueryList<ContentchildComponent>;

  ngAfterContentInit(){
    console.dir(this.contentChild);

    console.dir(this.contentChildren);
  }
}
