import { Directive, ElementRef, Input, Renderer2, OnInit, Inject, PLATFORM_ID, } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appMovingElement]',
  standalone: true
})
export class MovingElementDirective implements OnInit {
  private isBrowser: boolean;
  @Input('appMovingElement') color: string = 'blue';
  @Input() duration: number = 10; // Duration in seconds

  constructor(private el: ElementRef, 
    private renderer: Renderer2, 
    @Inject(PLATFORM_ID) private platformId: Object,
              @Inject(DOCUMENT) private document: Document) {
                this.isBrowser = isPlatformBrowser(this.platformId);
              }
              ngOnInit(): void {
                // Apply initial styles
                this.renderer.setStyle(this.el.nativeElement, 'background-color', this.color);
                this.renderer.setStyle(this.el.nativeElement, 'padding', '5px');
                this.renderer.setStyle(this.el.nativeElement, 'max-width', '10vw');
                this.renderer.setStyle(this.el.nativeElement, 'max-height', '10vh');
                this.renderer.setStyle(this.el.nativeElement, 'position', 'absolute');
                this.renderer.setStyle(this.el.nativeElement, 'zIndex', '200');
              
                if (this.isBrowser) {
                  // Browser-only code
                  this.document.querySelector('.some-element');
              
                  // Add the animation styles directly
                  const animationCss = `
                    @keyframes moveRight {
                      from { transform: translateY(-10vh); opacity: 100% }
                      to { transform: translateY(85vh); opacity: 10%}
                    }
              
                    .moving-element-animate {
                      animation: moveRight ${this.duration}s linear infinite;
                    }
                  `;
              
                  // Create a style element and append to the component
                  const style = this.document.createElement('style');
                  style.innerHTML = animationCss;
                  this.document.head.appendChild(style);
              
                  // Add the animation class to the element
                  this.renderer.addClass(this.el.nativeElement, 'moving-element-animate');
                }
              }
              
}
