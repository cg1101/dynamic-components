import {
  Component, OnInit, OnDestroy, Compiler, ComponentFactory,
  NgModule, ModuleWithComponentFactories, ViewContainerRef, ComponentRef, ViewChild
} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-exercise-3',
  template: `
    <div>
      <button (click)="sayHello()">Hello</button>
      <h3>Edit your template here</h3>
      <div>
      <textarea name="tmpl" id="tmpl" cols="30" rows="10" [(ngModel)]="myCrazyTemplate"></textarea>
      </div>
      <button (click)="compileTemplate()">Compile</button>
      <h3>Output</h3>
      <div #container></div>
    </div>
  `,
  styles: []
})
export class Exercise3Component implements OnInit, OnDestroy {

  @ViewChild('container', {read: ViewContainerRef})
    container: ViewContainerRef;

  myCrazyTemplate: string = `<div>
Hello, {{name}}.
It isn't this wonderful!
<button (click)="sayHello()">Say Hello</button>
</div>`;

  componentRef: ComponentRef<any>;

  constructor(private compiler: Compiler, ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  private createComponentFactorySync(compiler: Compiler,
                                     metadata: Component,
                                     componentClass: any): ComponentFactory<any> {
    // const cmpClass = componentClass || class RuntimeComponent { name: string = 'Denys' };
    const cmpClass = componentClass || class MyFakeComponentClass {
        name: string = 'The Great!';

        sayHello() {
          alert('hello from dynamically created component');
        }
      };
    const decoratedCmp = Component(metadata)(cmpClass);

    @NgModule({ imports: [CommonModule], declarations: [decoratedCmp] })
    class RuntimeComponentModule { }

    let module: ModuleWithComponentFactories<any> = compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
    return module.componentFactories.find(f => f.componentType === decoratedCmp);
  }

  compileTemplate() {
    let metadata = {
      selector: `runtime-component-sample`,
      template: this.myCrazyTemplate
    };

    let factory = this.createComponentFactorySync(this.compiler, metadata, null);

    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
    this.componentRef = this.container.createComponent(factory);
  }


  sayHello() {
    alert('hello');
  }
}
