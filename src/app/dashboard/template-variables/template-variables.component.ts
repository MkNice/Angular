import {Component} from '@angular/core';

@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html',
  styleUrls: ['./template-variables.component.scss'],
})
export class TemplateVariablesComponent {
  public name: string = 'Vasya';

  public log(target: unknown):void{
    console.log(target)
  }
}
