import {
  Component, Input, ViewContainerRef, ViewChild, OnInit, OnDestroy, ComponentRef,
  ComponentFactoryResolver
} from '@angular/core';

abstract class DynamicComponent {
  context: any;
}

@Component({
  selector: 'card',
  template: `
<div>
  <div #cardcanvas></div>
</div>
`
})
export class CardComponent extends DynamicComponent implements OnInit, OnDestroy {

  @Input()
  context: any;

  @ViewChild('cardcanvas', {read: ViewContainerRef})
  container: ViewContainerRef;

  @Input()
  type: string;


  private componentRef: ComponentRef<{}>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    super();
  }

  ngOnInit() {
    if (this.type) {
      let componentType = this.getComponentType(this.type);
      let factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
      this.componentRef = this.container.createComponent(factory);

      let instance = <DynamicComponent>this.componentRef.instance;
      instance.context = this.context;
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
  template: `<div>card-campaign-detail ({{context?.text}})</div>`
})
export class CampaignDetailCardComponent extends DynamicComponent{
}

@Component({
  selector: 'card-campaign-overview',
  template: `<div>card-campaign-overview ({{context?.text}})</div>`
})
export class CampaignOverviewCardComponent extends DynamicComponent {
}

@Component({
  selector: 'unknown-component',
  template: `<div>Unknown component ({{context?.text}})</div>`
})
export class UnknownDynamicComponent extends DynamicComponent {
}

