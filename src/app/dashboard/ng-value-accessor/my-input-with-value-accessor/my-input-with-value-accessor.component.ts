import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-my-input-with-value-accessor',
  templateUrl: './my-input-with-value-accessor.component.html',
  styleUrls: ['./my-input-with-value-accessor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyInputWithValueAccessorComponent),
      multi: true,
    },
  ],
})
export class MyInputWithValueAccessorComponent implements ControlValueAccessor{
  public value = '';

  public onChange:any = () => {}
  public onTouched:any = () => {}


  public change(event: Event):void{
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.onChange(value)
  }
  writeValue(value: any): void {
    this.value = value
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error('Method not implemented.');
  // }
}
