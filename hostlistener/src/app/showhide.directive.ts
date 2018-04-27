import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShowhide]'
})
export class ShowhideDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:click', ['$event'])
  onClick(elm)
  {
    console.dir(event.target);
    if(this.el.nativeElement.contains(event.target))
    {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }
    else
    {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
    }
  }
}
