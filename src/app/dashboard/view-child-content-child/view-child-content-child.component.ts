import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChildComponent} from "./child/child.component";

@Component({
  selector: 'app-view-child-content-child',
  templateUrl: './view-child-content-child.component.html',
  styleUrls: ['./view-child-content-child.component.scss']
})
export class ViewChildContentChildComponent implements OnInit, AfterViewInit{
  @ViewChild(ChildComponent, {static: false}) // разница в static false / true. Когда используется True то декоратор viewChild инциируется до того как
  // ngOnInit заработвает, а false после того. Так же когда используется static false, то его можно будет найти в хуке AfterViewInit
  private childComponent!: ChildComponent;

  @ViewChild('paragraph', {static: true})
  private  paragraph!: ElementRef;

  public ngOnInit():void{
    console.log(this.childComponent) // В данный момент тут undefined

    console.log(this.paragraph) // А здесь elementRef в котором есть nativeElement а там уже сам <p>
    console.log(this.paragraph?.nativeElement) // Вот так будет сам параграф
    this.log();
  }
  public ngAfterViewInit(): void {
    console.log('afterViewInit',this.childComponent) // А вот тут уже будет виден
  }
  public increment():void{
    this.childComponent.counter++
  }
  public decrement():void{
    this.childComponent.counter--
  }

  public  log(): void{
    console.log('this=>>>>>>',this);
  }

  public vb(): void {
    // const obj = {
    //   name: 'hj',
    //   age: 76,
    // };
    //
    // for (const key of Object.keys<>(obj) as Array<keyof typeof obj>) {
    //   console.log(key, obj[key]);
    // }
  }

}
