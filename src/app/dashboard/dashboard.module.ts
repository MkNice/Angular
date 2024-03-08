import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DecoratorsInputOutputModule } from './decorators-input-output/decorators-input-output.module';
import { NgModuleModule } from './ng-model/ng-module.module';
import { NgContentModule } from './ng-content/ng-content.module';
import { TemplateVariablesModule } from './template-variables/template-variables.module';
import { ViewChildContentChildModule } from './view-child-content-child/view-child-content-child.module';
import { LifecycleHooksModule } from './lifecycle-hooks/lifecycle-hooks.module';
import { DirectivesModule } from './directives/directives.module';
import { NgValueAccessorModule } from './ng-value-accessor/ng-value-accessor.module';
import { ChangeDetectionModule } from './change-detection/change-detection.module';
import { NgxSubFormLearnModule } from './ngx-sub-form-learn/ngx-sub-form-learn.module';
import { ReactiveFormsTestModule } from './reactive-forms-test/reactive-forms-test.module';

@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    DecoratorsInputOutputModule,
    NgContentModule,
    NgModuleModule,
    TemplateVariablesModule,
    ViewChildContentChildModule,
    LifecycleHooksModule,
    DirectivesModule,
    NgValueAccessorModule,
    ChangeDetectionModule,
    NgxSubFormLearnModule,
    ReactiveFormsTestModule,
  ],
})
export class DashboardModule {}
