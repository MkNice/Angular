import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DecoratorsInputOutputModule} from "./decorators-input-output/decorators-input-output.module";
import {NgModuleModule} from "./ng-model/ng-module.module";



@NgModule({
    declarations: [
        DashboardComponent
    ],
    exports: [
        DashboardComponent
    ],
  imports: [
    CommonModule,
    DecoratorsInputOutputModule,
    NgModuleModule
  ]
})
export class DashboardModule { }
