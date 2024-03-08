import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-another-moments-ng-zone',
  templateUrl: './another-moments-ng-zone.component.html',
  styleUrls: ['./another-moments-ng-zone.component.scss'],
})
export class AnotherMomentsNgZoneComponent {
  public stateNumber = 0;
  constructor(private nz: NgZone, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.nz.runOutsideAngular(() => {
      // setInterval(()=>{
      //   this.getRandomNumber2()
      // },0)
      // Promise.resolve().then(()=> this.getRandomNumber2())
    });
    // setInterval(()=>{
    //   this.cdr.markForCheck()
    // },4000)
    this.mousemoveDoc();
  }

  public mousemoveDoc(): void {
    this.nz.runOutsideAngular(() => {
      fromEvent(document.documentElement, 'mousemove').subscribe(() => {
        this.getRandomNumber2();
      });
    });
    setInterval(()=>{
      this.cdr.markForCheck()
    },1000)
  }

  public getRandomNumber2(): void {
    this.stateNumber = Math.random() * 1000;
  }
  public getRandomNumber(): number {
    this.cdr.markForCheck();
    return Math.random() * 1000;
  }
}
