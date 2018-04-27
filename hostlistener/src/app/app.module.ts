import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CounterDirective } from './counter.directive';
import { ShowhideDirective } from './showhide.directive';


@NgModule({
  declarations: [
    AppComponent,
    CounterDirective,
    ShowhideDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
