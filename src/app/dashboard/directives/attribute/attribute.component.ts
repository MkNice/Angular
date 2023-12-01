import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent implements OnInit{
  // По сути ты просто указываешь объект с классами у которых будет true или false, в зависимости от того какая булька там хранится, будет применятся этот
  // css класс или нет, если их несколько то будут применены несколько, разумеется в зависимости от того, если у них truthy значение
  public classNg = {
    someClassCss: true,
    anotherSecondClass: true,
  }

  public  isVisible = true;
  public  variableParent  = {
    data: {
      data: 'some fucking data'
    }
  }
  constructor() {
    console.log('Component, Constructor')
  }

  ngOnInit() {
    console.log('Component, ngOnInit')

  }
}
