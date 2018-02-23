import {Component, OnInit, OnDestroy, ElementRef, Renderer2} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';

import {ResponseUiService} from './response-ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private resizeSubscription: Subscription;
  private body: any;

  constructor(private resizeService: ResponseUiService,
              private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    this.body = this.renderer.parentNode(this.elementRef.nativeElement);
    this.resizeSubscription = this.resizeService.onResize$
      .pluck('innerWidth')
      .map(w => w <= 600 ? 'xs' : (w <= 960 ? 'sm' : (w <= 1280 ? 'md' : (w <= 1600 ? 'lg' : 'xl'))))
      .distinctUntilChanged()
      .subscribe(klass => {
        console.log('screen size factor:', klass);
        ['xs', 'sm', 'md', 'lg', 'xl'].forEach((x) => {
          if (x === klass) {
            this.body.classList.add(x);
          } else {
            this.body.classList.remove(x);
          }
        });
      });
  }

  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
}
