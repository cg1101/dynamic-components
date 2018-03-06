import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponseUiService } from './response-ui.service';
import { WindowRef } from './WindowRef';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ResponseUiService,
    WindowRef,
  ],
})
export class CoreModule { }
