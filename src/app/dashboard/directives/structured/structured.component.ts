import { Component } from '@angular/core';

@Component({
  selector: 'app-structured',
  templateUrl: './structured.component.html',
  styleUrls: ['./structured.component.scss']
})
export class StructuredComponent {
  public  isData: boolean = true
  public  isChecked: boolean = false;

  public  someData: number[] = [1,2,3,4,5,6]
  public  someF= 2

  count = 4 // ngPlural when I give string values it goes to default statement
  count1 = "one" // ngSwitch works here perfectly
}
