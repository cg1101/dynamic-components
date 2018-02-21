import {
  Component, Input, ViewContainerRef, ViewChild, OnInit, OnDestroy, ComponentRef,
  ComponentFactoryResolver
} from '@angular/core';

@Component({
  selector: 'card',
  template: `
<div>
  <div #cardcanvas></div>
</div>
`
})
export class CardComponent implements OnInit, OnDestroy {

  @ViewChild('cardcanvas', {read: ViewContainerRef})
  container: ViewContainerRef;

  @Input()
  type: string;


  private componentRef: ComponentRef<{}>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    if (this.type) {
      let componentType = this.getComponentType(this.type);
      let factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
      this.componentRef = this.container.createComponent(factory);
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  private mappings = {
    'campaign-overview': CampaignOverviewCardComponent,
    'campaign-detail': CampaignDetailCardComponent,
  };

  getComponentType(typeName: string) {
    let type = this.mappings[typeName];
    return type || UnknownDynamicComponent;
  }
}

@Component({
  selector: 'card-campaign-detail',
  template: `<div>card-campaign-detail</div>`
})
export class CampaignDetailCardComponent {
}

@Component({
  selector: 'card-campaign-overview',
  template: `<div>card-campaign-overview</div>`
})
export class CampaignOverviewCardComponent {
}

@Component({
  selector: 'unknown-component',
  template: `<div>Unknown component</div>`
})
export class UnknownDynamicComponent {
}

