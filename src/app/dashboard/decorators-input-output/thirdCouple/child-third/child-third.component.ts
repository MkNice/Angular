import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-third',
  templateUrl: './child-third.component.html',
  styleUrls: ['./child-third.component.scss']
})
export class ChildThirdComponent {
  @Output() dataEvent = new EventEmitter();
  public data = '';

  public onSend():void{
    this.dataEvent.emit(this.data)
  }
}
