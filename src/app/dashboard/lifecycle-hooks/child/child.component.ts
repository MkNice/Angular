import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, ContentChild,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';
import {ChildSecondComponent} from "../child-second/child-second.component";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements   //ngOnInit, DoCheck,
  // OnChanges,
  AfterContentInit
  // AfterContentChecked,
  // AfterViewChecked,AfterViewInit
   {

  @Input() name: string = "";
  count:number = 1;

  @Input() public doSmth: string = '';
  @Output() public someData: EventEmitter<string> = new EventEmitter<string>();
  @ContentChild(ChildSecondComponent) public contentChild: any;

  public  data = 0;

  // ngOnChanges() {
  //   this.log(`OnChanges`);
  // }
  // ngOnInit() {
  //   this.log(`ngOnInit`);
  // }
  //
  // ngDoCheck() {
  //   this.log(`ngDoCheck`);
  // }
  // ngAfterViewInit() {
  //   this.count++
  //   console.log(`        ${this.count}     `, 'ngAfterViewInit',this.contentChild)
  // }
  // ngAfterViewChecked() {
  //   this.log(`ngAfterViewChecked`);
  // }
  ngAfterContentInit() {
    console.log('ngAfterContentInit',this.contentChild)
  }
  // ngAfterContentChecked() {
  //   this.log(`ngAfterContentChecked`);
  // }

  public someDataChange():void{
    this.someData.emit('Bas Badabam' + this.data)
  }
}
