import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionComponent } from './change-detection.component';
import { ChildComponent } from './child/child.component';
import { SecondComponent } from './child/second/second.component';
import { AnotherMomentsNgZoneComponent } from './another-moments-ng-zone/another-moments-ng-zone.component';



@NgModule({
  declarations: [
    ChangeDetectionComponent,
    ChildComponent,
    SecondComponent,
    AnotherMomentsNgZoneComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ChangeDetectionComponent,
    AnotherMomentsNgZoneComponent
  ]
})
export class ChangeDetectionModule { }
