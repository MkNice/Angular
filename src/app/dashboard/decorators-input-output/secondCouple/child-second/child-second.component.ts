import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-second',
  templateUrl: './child-second.component.html',
  styleUrls: ['./child-second.component.scss'],
})
export class ChildSecondComponent {
  @Output() data = new EventEmitter();

  public onChange(event:string): void {
    this.data.emit(event);
  }
  public onChangeInput(event:Event): void {
    this.data.emit((event.target as HTMLInputElement).value);
  }
}
