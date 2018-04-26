import { Component, ContentChild, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { ContentchildComponent } from './contentchild/contentchild.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

}
