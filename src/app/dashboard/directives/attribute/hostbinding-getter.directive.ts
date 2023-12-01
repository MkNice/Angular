import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appHostbindingGetter]'
})
export class HostbindingGetterDirective {

  @Input('appHostbindingGetter') appAddClass!: string; // Входное свойство для передачи имени класса

  @HostBinding('class') get hostClasses() {
    return this.appAddClass || 'defaultClass'; // Если нет переданного класса, используется 'defaultClass'
  }
}
