import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHostBinding]'
})
export class HostBindingDirective implements OnInit{
  @HostBinding('style') backgroundColor!: Record<string, string>;
  @HostBinding('class') class: any;
  @HostBinding('class.someClassCss') public isSomeClass = true
// HostBinding это такая штука которая позволяет управлять атрибутами тега. Полагаю, любые атрибуты можно использовать
// В общем скорее добавлять или удалять то что он добавил, как в примере с классом выше/ниже

  @Input('appHostBinding') suka: any = ''
  @Input() suka2: any = ''


  constructor() {
    console.log('Directive, Constructor', this.suka)
    // console.log('variable=>>>>', this.myVariable, 'variable child =>>>>', this.variableChild)
  }

  ngOnInit() {
  this.class = ''
    console.log('Directive, ngOnInit', this.suka, this.suka2)
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.class = 'anotherClass'
    this.backgroundColor = {'background-color': 'red', 'color': 'blue', 'font-size': '50px'};
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.class = ''
    this.backgroundColor = {'background-color': 'blue', 'color': 'red', 'font-size': '10px'};
  }

}

