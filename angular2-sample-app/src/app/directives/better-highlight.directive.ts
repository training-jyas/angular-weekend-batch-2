import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  Input,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // @Input() defaultColor: string;
  // @Input('appBetterHighlight') defaultColor: string;
  @Input('appBetterHighlight') colors: any;
  @Input() backgroundColor: string;
  @HostBinding('style.backgroundColor') bColor: string;
  @HostBinding('id') id: string;

  constructor(private renderer: Renderer2,
    private elem: ElementRef) {}

  ngOnInit() {
    // this.renderer.setStyle(this.elem.nativeElement, 'background-color', this.colors.default);
    this.bColor = this.colors.default;
    console.log(this.colors);
    this.id = 'paragraph2';
  }

  @HostListener('mouseenter') onHover() {
    // this.renderer.setStyle(this.elem.nativeElement, 'background-color', this.colors.highlight);
    this.bColor = this.colors.highlight;
    this.renderer.setStyle(this.elem.nativeElement, 'color', 'orange');
  }

  @HostListener('mouseleave') onHoverOut() {
    // this.renderer.setStyle(this.elem.nativeElement, 'background-color', this.colors.default);
    this.bColor = this.colors.default;
  }

  @HostListener('click') onClick() {
    this.renderer.setStyle(this.elem.nativeElement, 'border', '2px solid');
  }

}
