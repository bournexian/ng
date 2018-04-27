import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'button[appCounter]'
})
export class CounterDirective {

  constructor() { }

  count:number = 0;

  @HostListener('click', ['$event.target'])
  onClick(btn: HTMLElement)
  {
    console.log(btn.outerHTML+' was clicked: ' + this.count++);
  }

}
