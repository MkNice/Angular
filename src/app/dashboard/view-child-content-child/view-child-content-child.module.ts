import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import {ViewChildContentChildComponent} from "./view-child-content-child.component";



@NgModule({
  declarations: [
    ViewChildContentChildComponent,
    ChildComponent,
  ],
  exports:[
    ViewChildContentChildComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ViewChildContentChildModule { }
