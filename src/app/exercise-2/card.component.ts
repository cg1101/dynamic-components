import {
  Component, Input, ViewContainerRef, OnInit, OnDestroy, ComponentRef,
  ComponentFactoryResolver
} from '@angular/core';

interface DynamicComponent {
  context: any;
  type: string;
}

/* tslint:disable:component-selector*/
@Component({
  selector: 'card-campaign-detail',
  template: `<div>card-campaign-detail ({{context?.text}})</div>`
})
export class CampaignDetailCardComponent implements DynamicComponent {
  @Input() context: any;
  @Input() type: string;
}

@Component({
  selector: 'card-campaign-overview',
  template: `<div>card-campaign-overview ({{context?.text}})</div>`
})
export class CampaignOverviewCardComponent implements DynamicComponent {
  @Input() context: any;
  @Input() type: string;
}

@Component({
  selector: 'unknown-component',
  template: `<div>Unknown component ({{context?.text}})</div>`
})
export class UnknownDynamicComponent implements DynamicComponent {
  @Input() context: any;
  @Input() type: string;
}

@Component({
  selector: 'card',
  template: '<ng-container></ng-container>'
})
export class CardComponent implements OnInit, OnDestroy, DynamicComponent {

  @Input() context: any;
  @Input() type: string;

  private componentRef: ComponentRef<{}>;
  private mappings = {
    'campaign-overview': CampaignOverviewCardComponent,
    'campaign-detail': CampaignDetailCardComponent,
  };

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private container: ViewContainerRef) {
  }

  ngOnInit() {
    if (this.type) {
      const componentType = this.getComponentType(this.type);
      const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
      this.componentRef = this.container.createComponent(factory);

      const instance = <DynamicComponent>this.componentRef.instance;
      instance.context = this.context;
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  getComponentType(typeName: string) {
    const type = this.mappings[typeName];
    return type || UnknownDynamicComponent;
  }
}
/* tslint:enable:componet-selector*/
