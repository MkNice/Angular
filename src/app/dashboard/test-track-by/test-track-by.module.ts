import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestTrackByComponent } from './test-track-by.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TestTrackByComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    TestTrackByComponent,
  ]
})
export class TestTrackByModule { }
