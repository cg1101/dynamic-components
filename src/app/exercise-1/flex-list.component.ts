import {Component, OnInit, Input, TemplateRef, ContentChild} from '@angular/core';

@Component({
  selector: 'app-flex-list',
  template: `
<ul>
   <ng-template ngFor [ngForOf]="items" [ngForTemplate]="userTemplate"></ng-template>
</ul>
`,
  styles: [''],
})
export class FlexListComponent implements OnInit {

  @ContentChild(TemplateRef)
  userTemplate: TemplateRef<any>;

  @Input() items: any[];

  constructor() {
  }

  ngOnInit() {
  }

}
