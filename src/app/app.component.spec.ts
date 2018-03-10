import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { AppComponent } from './app.component';
import { ResponseUiService } from './core/response-ui.service';
import { WindowRef } from './core/WindowRef';

describe('AppComponent', () => {
  const serviceMock = {
    onResize$: new Subject<Window>(),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
      imports: [
        RouterModule.forRoot([]),
      ],
      providers: [
        WindowRef,
        {
          provide: ResponseUiService,
          useValue: serviceMock,
        },
        {
          provide: APP_BASE_HREF,
          useValue: '/',
        },
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Test of dynamic component');
  }));
});
