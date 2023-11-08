import {Component} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  public counter: number = 0;

  public increment(): void {
    this.counter++;
  }

  public decrement(): void {
    this.counter--;
  }
}
