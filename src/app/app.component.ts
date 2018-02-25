import {Component, OnInit, OnDestroy, ElementRef, Renderer2, AfterViewInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';

import {ResponseUiService} from './response-ui.service';
import {WindowRef} from './WindowRef';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

  private resizeSubscription: Subscription;
  private body: any;

  constructor(private resizeService: ResponseUiService,
              private elementRef: ElementRef,
              private renderer: Renderer2,
              private winRef: WindowRef) {
    // the size is available now but cannot set body's class yet
    // getting the native window obj
    // console.log('Navite window obj', winRef.nativeWindow);
    // console.log('window size', winRef.nativeWindow.innerWidth, 'x', winRef.nativeWindow.innerHeight);
  }

  private getSizeClass(w) {
    return w <= 600 ? 'xs' : (w <= 960 ? 'sm' : (w <= 1280 ? 'md' : (w <= 1600 ? 'lg' : 'xl')));
  }

  private setClass(klass) {
    // console.log('screen size factor:', klass);
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach((x) => {
      if (x === klass) {
        this.body.classList.add(x);
      } else {
        this.body.classList.remove(x);
      }
    });
  }

  ngOnInit() {
    this.body = this.renderer.parentNode(this.elementRef.nativeElement);
    this.resizeSubscription = this.resizeService.onResize$
      .pluck('innerWidth')
      .map(this.getSizeClass.bind(this))
      .distinctUntilChanged()
      .subscribe(klass => {
        this.setClass(klass);
      });
  }

  ngAfterViewInit() {
    this.setClass(this.getSizeClass(this.winRef.nativeWindow.innerWidth));
  }

  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
}
