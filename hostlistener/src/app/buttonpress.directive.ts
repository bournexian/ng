import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonpress]'
})
export class ButtonpressDirective {

  constructor() { }

  @HostBinding('attr.newAttr') attr = 'attribute add by hostbinding dynamically';
  @HostBinding('class.pressed') isPressed: boolean; 

  @HostListener('mousedown')   hasPressed(){
    this.isPressed = true;
  }

  @HostListener('mouseup') hasReleased(){
    this.isPressed = false;
  }
}
