import { Directive, ElementRef, Input, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Directive({
  selector: '[appScrollable]',
  exportAs: 'appScrollable'
})
export class ScrollableDirective implements AfterViewInit {
  private intervalSubscription: Subscription;

  clientWidth: number;
  scrollWidth: number;
  scrollLeft: number;

  @Input() scrollUnit: number;

  constructor(private elementRef: ElementRef, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.clientWidth = this.element.clientWidth;
      this.scrollWidth = this.element.scrollWidth;
      this.scrollLeft = this.element.scrollLeft;

      this.cdr.detectChanges();
    }, 1000);
  }

  private get element() {
    return this.elementRef.nativeElement;
  }

  get isOverflow() {
    return this.scrollWidth > this.clientWidth;
  }

  scroll(direction: number) {
    this.stopScroll();

    this.intervalSubscription = interval(1).subscribe(() => {
      this.element.scrollLeft += this.scrollUnit * direction;
    });
  }

  get canScrollFirst() {
    return this.element.scrollLeft > 0;
  }

  get canScrollEnd() {
    return this.element.scrollLeft + this.clientWidth != this.scrollWidth;
  }

  stopScroll(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.clientWidth = this.element.clientWidth;
    this.scrollWidth = this.element.scrollWidth;
    this.scrollLeft = this.element.scrollLeft;
  }
}
