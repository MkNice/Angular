import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DecoratorsInputOutputComponent } from './decorators-input-output.component';
import { ChildFirstComponent } from './firstCouple/child-first/child-first.component';
import { ChildSecondComponent } from './secondCouple/child-second/child-second.component';
import { ChildThirdComponent } from './thirdCouple/child-third/child-third.component';
import { ChildFourthComponent } from './fourthCouple/child-fourth/child-fourth.component';
import { ParentFirstComponent } from './firstCouple/parent-first/parent-first.component';
import { ParentSecondComponent } from './secondCouple/parent-second/parent-second.component';
import { ParentThirdComponent } from './thirdCouple/parent-third/parent-third.component';
import { ParentFourthComponent } from './fourthCouple/parent-fourth/parent-fourth.component';

@NgModule({
  declarations: [
    DecoratorsInputOutputComponent,
    ChildFirstComponent,
    ChildSecondComponent,
    ChildThirdComponent,
    ChildFourthComponent,
    ParentFirstComponent,
    ParentSecondComponent,
    ParentThirdComponent,
    ParentFourthComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DecoratorsInputOutputComponent,
  ]
})
export class DecoratorsInputOutputModule { }
