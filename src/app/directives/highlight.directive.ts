import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() color = 'lightblue';

  constructor(private element: ElementRef) {
    // console.warn(element)
  }

  @HostListener('mouseenter') addHighlight() {
    this.element.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave') removeHighlight() {
    this.element.nativeElement.style.backgroundColor = null;
  }
}
