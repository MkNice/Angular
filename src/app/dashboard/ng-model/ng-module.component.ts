import {Component} from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-module.component.html',
  styleUrls: ['./ng-module.component.scss']
})
export class NgModuleComponent {
  public data: string = ''

  public getData(event: string): void {
    this.data = event;
    console.log(this.data)
  }

}
