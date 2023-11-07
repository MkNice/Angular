import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModuleComponent } from './ng-module.component';
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        NgModuleComponent,
    ],
    exports: [
        NgModuleComponent
    ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class NgModuleModule { }
