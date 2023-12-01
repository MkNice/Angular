import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { StructuredComponent } from './structured/structured.component';
import { AttributeComponent } from './attribute/attribute.component';
import { ComponentsComponent } from './components/components.component';
import { MyAttrDirective } from './attribute/my-attr.directive';
import { MyAttrSecondDirective } from './attribute/my-attr-second.directive';
import { DisappearDirective } from './attribute/disappear.directive';
import { HostBindingDirective} from './attribute/host-binding.directive';
import {HostbindingGetterDirective} from "./attribute/hostbinding-getter.directive";

@NgModule({
    declarations: [
        DirectivesComponent,
        StructuredComponent,
        AttributeComponent,
        ComponentsComponent,
        MyAttrDirective,
        MyAttrSecondDirective,
        DisappearDirective,
        HostBindingDirective,
      HostbindingGetterDirective
    ],
  exports: [
    DirectivesComponent,
  ],
    imports: [
        CommonModule,
    ]
})
export class DirectivesModule { }
