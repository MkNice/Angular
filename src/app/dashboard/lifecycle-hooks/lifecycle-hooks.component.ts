import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild, ElementRef,
  OnChanges,
  SimpleChanges, ViewChild
} from '@angular/core';
import {ChildComponent} from "./child/child.component";
import {ChildSecondComponent} from "./child-second/child-second.component";

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class LifecycleHooksComponent implements  AfterViewInit{
  @ViewChild(ChildComponent) public  childView!: ChildComponent;

  ngAfterViewInit(): void {
    // console.log('afterViewInit', this.childView);
  }
  public smthData: string = 'Hello motherfucker'
  public anotherData: string = 'another Data';


  // todo Напиши свой дебаунсер, эта такая штука которая делает делей на инпуте, аля 300мс и потом аля срабатывает тип метод
  // todo или что-то вроде того, аля какой-то нибудь живой поиск.
}
