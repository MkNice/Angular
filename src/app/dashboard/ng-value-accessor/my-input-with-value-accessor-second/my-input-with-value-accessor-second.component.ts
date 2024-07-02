import { Component, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-my-input-with-value-accessor-second',
  templateUrl: './my-input-with-value-accessor-second.component.html',
  styleUrls: ['./my-input-with-value-accessor-second.component.scss'],
})
export class MyInputWithValueAccessorSecondComponent implements ControlValueAccessor {
  public value = ''

  private onChange!: (value: string) => void;
  private onTouched!: () => void;

  constructor(@Self() private readonly ngControl: NgControl){
    this.ngControl.valueAccessor = this;
  }

  public change(event: Event):void{
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.onChange(value)
  }

  public writeValue(value: any): void {
    this.value = value
  }
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error('Method not implemented.');
  // }

}
