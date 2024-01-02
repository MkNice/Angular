import { Component, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-my-input-with-value-accessor-third',
  templateUrl: './my-input-with-value-accessor-third.component.html',
  styleUrls: ['./my-input-with-value-accessor-third.component.scss']
})
export class MyInputWithValueAccessorThirdComponent {

  public get value(): string {
    return this.ngControl.value;
}

  constructor( private readonly ngControl: NgControl){  }

}
