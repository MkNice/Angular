import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LifecycleHooksComponent} from "./lifecycle-hooks.component";
import { ChildComponent } from './child/child.component';
import {FormsModule} from "@angular/forms";
import { ChildSecondComponent } from './child-second/child-second.component';

@NgModule({
  declarations: [
    LifecycleHooksComponent,
    ChildComponent,
    ChildSecondComponent,
  ],
  exports: [
    LifecycleHooksComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LifecycleHooksModule { }
