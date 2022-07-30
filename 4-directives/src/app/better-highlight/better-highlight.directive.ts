import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'blue'
    // ); //solution one
    this.backgroundColor = this.hightLightColor; //solution tow
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    // this.elementRef.nativeElement,
    // 'background-color',
    //   // 'transparent'
    // ); //solution one
    this.backgroundColor = this.defaultColor; //solution tow
  }

  @HostListener('click') clickElement(eventData: Event) {
    this.backgroundColor = this.renamedDefaultColor;
  }

  @Input() hightLightColor: string = 'blue';
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') renamedDefaultColor: string = 'transparent';
  @HostBinding('style.backgroundColor') backgroundColor: string;
}
