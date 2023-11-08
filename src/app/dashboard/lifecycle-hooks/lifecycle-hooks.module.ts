import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LifecycleHooksComponent} from "./lifecycle-hooks.component";
import { ChildComponent } from './child/child.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LifecycleHooksComponent,
    ChildComponent,
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
