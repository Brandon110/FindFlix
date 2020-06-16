import { Component, ViewChild, ElementRef, HostListener, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  private routeSubscription: Subscription;

  currentUrl: string;

  @ViewChild('header') elementRef: ElementRef;
  headerHeight: string;

  constructor(private router: Router) {}

  get element() {
    return this.elementRef.nativeElement;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.headerHeight = this.element.offsetHeight;
      document.getElementById('content-site').style.marginTop = this.headerHeight + 'px';
    }, 0);

    this.routeSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.headerHeight = this.element.offsetHeight;
          document.getElementById('content-site').style.marginTop = this.headerHeight + 'px';
        }, 0);
      }
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.headerHeight = this.element.offsetHeight;
    document.getElementById('content-site').style.marginTop = this.headerHeight + 'px';
  }
}
