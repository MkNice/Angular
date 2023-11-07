import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgContentComponent } from './ng-content.component';
import { ChildFirstComponent } from './firstCouple/child-first/child-first.component';
import { ParentFirstComponent } from './firstCouple/parent-first/parent-first.component';
import { ParentSecondComponent } from './secondCouple/parent-second/parent-second.component';
import { ChildSecondComponent } from './secondCouple/child-second/child-second.component';
import { ChildThirdComponent } from './thirdCouple/child-third/child-third.component';
import { ParentThirdComponent } from './thirdCouple/parent-third/parent-third.component';



@NgModule({
  declarations: [
    NgContentComponent,
    ChildFirstComponent,
    ParentFirstComponent,
    ParentSecondComponent,
    ChildSecondComponent,
    ChildThirdComponent,
    ParentThirdComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgContentComponent,
  ]
})
export class NgContentModule { }
