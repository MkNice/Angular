import {ChangeDetectionStrategy, Component, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class LifecycleHooksComponent implements  OnChanges{
  public smthData: string = 'Hello motherfucker'
  public anotherData: string = 'another Data';

  public  ngOnChanges(changes: SimpleChanges):void{
    console.log('ParentChangesasdasd as afdas fasd fsd', changes)
  }
}
