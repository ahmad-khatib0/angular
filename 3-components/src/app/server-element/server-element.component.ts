import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  // encapsulation: ViewEncapsulation.None, // make the styles globals (unscoped)
  // encapsulation: ViewEncapsulation.Emulated // default
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor() {
    console.log('constructor called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('called ngOnChanges');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('ngOnInit called when @Input changes');
    console.log(`Text content ` + this.header.nativeElement.textContent);
    console.log(
      `Text content of paragraph` + this.paragraph.nativeElement.textContent
    );
  }
  ngDoCheck(): void {
    console.log('ng do check called whenever angular checks for any changes');
  }
  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit called, it\'s gonna be called just once, because content it 
    it didn't reinitialized again, the thing that initialized in this context is the p tag that has 
    list-group-item class in AppComponent html `);
    console.log(
      `Text content of paragraph` + this.paragraph.nativeElement.textContent
    );
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called after each detecting cycle');
  }
  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit called`);
    console.log(`Text content ` + this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }

  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;

  @ViewChild('heading', { static: true }) header: ElementRef;
  //ViewChild to get ref of an element from  the same component,
  // ContentChild to get ref of  an element from the paren component
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;
}
