import { Component,EventEmitter,Output,Input} from '@angular/core';

@Component({
  selector: 'app-child-fourth',
  templateUrl: './child-fourth.component.html',
  styleUrls: ['./child-fourth.component.scss']
})
export class ChildFourthComponent {
  @Input() public data = '';
  @Output() dataChange = new EventEmitter()
  // ! Важное замечание, если инпут и аутпут по именам не будут совпадать, кроме ключевого слова Change, то работать ничего не будет
  // ! Хош проверь, поменяй одну букку в аутпуте, и ахереешь. Например с data -> datas. Увидишь ошибку, потом поменять инпут data -> datas, 
  // ! И везде где она используется разумеется ,ахереешь ещё раз.
  public sendData():void{
    this.dataChange.emit(this.data);
  }
}
