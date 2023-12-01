import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appMyAttrDirectiveSecond]'
})
export class MyAttrSecondDirective {


  @HostListener('click') OnClick() {
    console.log('clicked')
  }

//Пометочка, ['$event'] - не является деструкторизацией или ещё чем, это просто некая передача event-а к обработчику, в нашем случае к onKeyUp.
  @HostListener('keyup', ['$event']) onKeyUp(event: KeyboardEvent) { // Заметь такую фичу, что если не писать ['$event'] то тогда в консольке event будет равен undefined
    // console.log('pok', event)
  }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    console.log('pokDown', event)
  }

  // Срабатывает при изменении размеров окна браузера
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    console.log('Window resized:', event);
  }

  // Срабатывает при прокрутке документа
  @HostListener('document:scroll', ['$event'])
  public onDocumentScroll(event: Event) {
    console.log('Document scrolled:', event);
  }

  @HostListener('change', ['$event']) onChange(event: Event) {
    console.log('changed', event)
  }

  @HostListener('mouseover') onMouseOver() {
    console.log('mouseover')

  }

  @HostListener('mouseout') onMouseOut() {
    console.log('mouseout')
  }
}
