import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgValueAccessorComponent } from './ng-value-accessor.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { MyInputWithValueAccessorComponent } from './my-input-with-value-accessor/my-input-with-value-accessor.component';
import { MyInputWithValueAccessorSecondComponent } from './my-input-with-value-accessor-second/my-input-with-value-accessor-second.component';
import { MyInputWithValueAccessorThirdComponent } from './my-input-with-value-accessor-third/my-input-with-value-accessor-third.component';



@NgModule({
  declarations: [
    NgValueAccessorComponent,
    ReactiveFormsComponent,
    CustomInputComponent,
    MyInputWithValueAccessorComponent,
    MyInputWithValueAccessorSecondComponent,
    MyInputWithValueAccessorThirdComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NgValueAccessorComponent
  ]
})
export class NgValueAccessorModule { }
