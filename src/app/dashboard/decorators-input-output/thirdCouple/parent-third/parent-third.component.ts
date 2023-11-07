import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-third',
  templateUrl: './parent-third.component.html',
  styleUrls: ['./parent-third.component.scss']
})
export class ParentThirdComponent {
  public dataParent!:string;

  constructor(){
    setInterval(()=>{
      console.log(this.dataParent);
    },1000)
  }

  public getDataFromChild(event : string):void {
    console.log(event);
  }
}
