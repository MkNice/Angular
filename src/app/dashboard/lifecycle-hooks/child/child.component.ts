import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit  {

  @Input() name: string = "";
  count:number = 1;

  @Input() public doSmth: string = '';
  @Output() public someData: EventEmitter<string> = new EventEmitter<string>();

  public  data = 0;

  ngOnChanges() {

    this.log(`OnChanges`);
  }
  ngOnInit() {

    this.log(`ngOnInit`);
  }

  ngDoCheck() {

    this.log(`ngDoCheck`);
  }
  ngAfterViewInit() {

    this.log(`ngAfterViewInit`);
  }
  ngAfterViewChecked() {

    this.log(`ngAfterViewChecked`);
  }
  ngAfterContentInit() {

    this.log(`ngAfterContentInit`);
  }
  ngAfterContentChecked() {

    this.log(`ngAfterContentChecked`);
  }

  private log(msg: string) {
    console.log(this.count + ". " + msg);
    this.count++;
  }

  constructor() {
    this.log('constructor')
  }
  public someDataChange():void{
    this.someData.emit('Bas Badabam' + this.data)
  }
}
