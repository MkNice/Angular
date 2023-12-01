import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DecoratorsInputOutputModule} from "./decorators-input-output/decorators-input-output.module";
import {NgModuleModule} from "./ng-model/ng-module.module";
import {NgContentModule} from "./ng-content/ng-content.module";
import {TemplateVariablesModule} from "./template-variables/template-variables.module";
import {ViewChildContentChildModule} from "./view-child-content-child/view-child-content-child.module";
import {LifecycleHooksModule} from "./lifecycle-hooks/lifecycle-hooks.module";
import {DirectivesModule} from "./directives/directives.module";

@NgModule({
    declarations: [
        DashboardComponent,
    ],
  exports: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DecoratorsInputOutputModule,
    NgContentModule,
    NgModuleModule,
    TemplateVariablesModule,
    ViewChildContentChildModule,
    LifecycleHooksModule,
    DirectivesModule,
  ]
})
export class DashboardModule { }
