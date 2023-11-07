import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologiesComponent } from '../../../../technologies.component';
import { DecoratorsInputOutputModule } from '../../decorators-input-output.module';
import { NgContentModule } from '../../../ng-content/ng-content.module';
import { NgModelComponent } from '../../../ng-model/ng-model.component';


@NgModule({
  declarations: [
    TechnologiesComponent,
    NgModelComponent,
  ],
  imports: [
    CommonModule,
    DecoratorsInputOutputModule,
    NgContentModule
  ],
  exports: [
    TechnologiesComponent
  ]
})
export class TechnologiesModule { }