import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { StructuredComponent } from './structured/structured.component';
import { AttributeComponent } from './attribute/attribute.component';
import { ComponentsComponent } from './components/components.component';
import { MyAttrDirectiveDirective } from './attribute/my-attr-directive.directive';

@NgModule({
  declarations: [
    DirectivesComponent,
    StructuredComponent,
    AttributeComponent,
    ComponentsComponent,
    MyAttrDirectiveDirective
  ],
  exports: [
    DirectivesComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
