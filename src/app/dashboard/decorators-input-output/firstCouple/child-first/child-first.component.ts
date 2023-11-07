import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-first',
  templateUrl: './child-first.component.html',
  styleUrls: ['./child-first.component.scss'],
})
export class ChildFirstComponent implements OnInit {
  @Output() public data: EventEmitter<string> = new EventEmitter();

  constructor() {
    //   this.data.emit('I have some data'); // ! Так не сработает, разве что если с задержкой
  }
  ngOnInit(): void {
    this.data.emit('I have some data');
  }
}
