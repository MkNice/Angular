import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent {
  @Input() public valueInput = 'defaultValue';
  @Output() public valueInputChange: EventEmitter<string> = new EventEmitter()

  public sentData(){
    this.valueInputChange.emit(this.valueInput)
  }

}
