import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsTestComponent } from './reactive-forms-test.component';

@NgModule({
  declarations: [
    ReactiveFormsTestComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsTestComponent
  ]
})
export class ReactiveFormsTestModule { }
