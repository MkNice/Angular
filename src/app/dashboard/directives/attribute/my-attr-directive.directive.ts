import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMyAttrDirective]',
  // Standalone: true. Если указать standalone, то нужно будет убрать из модуля declarations и добавить в imports, иначе работать не будет
  // ибо он как бы становится независимым компонентом, который может любой модуль/компонент(с standalone) импортировать.
})
export class MyAttrDirectiveDirective {

  // ElementRef это просто объект в котором есть nativeElement, а в нём по сути нода над которой применяется эта директива.
  // Render, просто обёртка над document, я так понимаю, что лучше если как-то взаимодействовать напрямую с домом, то через Renderer2
  // у него похожие методы, как и document, тоже можно создавать элемент, пихать, удалять, добавлять стили, классы, удалять их и т.д.
  constructor(private  elementRef: ElementRef, private  render: Renderer2) {
    this.elementRef.nativeElement.style.fontWeight = "bold";
    this.elementRef.nativeElement.style.fontSize = '60px'
    this.elementRef.nativeElement.style.cursor = 'pointer'
    this.elementRef.nativeElement.style.backgroundColor = '#000'
    this.elementRef.nativeElement.style.color = '#fff'
    this.render.setStyle(this.elementRef.nativeElement, 'color', 'blue', )
  } 
  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.display = 'none'
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.elementRef.nativeElement.style.display = 'block'
  }
}

