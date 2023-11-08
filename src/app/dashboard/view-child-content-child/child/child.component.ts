import {Component, ContentChild, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{
  public counter: number = 0;
  @ContentChild('divVariable', {static: true, read: true})
  private  someDiv!: ElementRef;

  public  ngOnInit():void {
    console.log(this.someDiv)
  }

}
