import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-test-track-by',
  templateUrl: './test-track-by.component.html',
  styleUrls: ['./test-track-by.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestTrackByComponent {
  public bigArray: any;
  public data: any;
  public count: number = 0;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.generateBigMassive();
  }

  public trackByIndex = (index:any, item:any) => index;

  public generateBigMassive(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/photos')
      .subscribe((data) => {
        this.bigArray = data;
        this.cdr.markForCheck();

      });
      setInterval(()=>{
        console.log(++this.count);
        this.bigArray.forEach((el: any) => {
          if(el.id > 0 && el.id < 1000){
            el.id = ++el.id;
            this.cdr.markForCheck();
          }
        });
      },300)

    }

    
}
