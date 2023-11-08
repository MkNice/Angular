import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TemplateVariablesComponent} from "./template-variables.component";
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [
    TemplateVariablesComponent,
    ChildComponent
  ],
  exports: [
    TemplateVariablesComponent,
    ChildComponent
  ],
  imports: [
    CommonModule
  ],

})
export class TemplateVariablesModule { }
