import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CounterDirective } from './counter.directive';
import { ShowhideDirective } from './showhide.directive';
import { ButtonpressDirective } from './buttonpress.directive';


@NgModule({
  declarations: [
    AppComponent,
    CounterDirective,
    ShowhideDirective,
    ButtonpressDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
