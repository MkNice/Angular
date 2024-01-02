import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

  public newControl = new FormControl('some');


  public reactiveForms = new FormGroup({
    title: new FormControl('Form Control', [Validators.required, Validators.minLength(10)]),
    age: new FormControl('12'),
    sex: new FormControl('man'),
  })
  public sexFormControl: FormControl;


  // public formBuilderTest = this.FB.group({
  //   title: ['FormControl', Validators.required, Validators.minLength(10)],
  //   age: ['12'],
  //   sex: ['man'],
  // })

 

  constructor(private FB: FormBuilder){
    this.sexFormControl = this.reactiveForms.get('sex') as FormControl;

  }

  public test:any = 'asdasd'

  public logOn():void{
    // console.log(this.test);
    console.log(this.reactiveForms.get('age')?.value,this.reactiveForms.get('title')?.value, this.reactiveForms.get('sex')?.value);
    
  }
    // const title = this.reactiveForms.get('title')?.value;
    // const age = this.reactiveForms.get('age')?.value;
    // const sex = this.reactiveForms.get('sex')

    // console.log(title, age, sex);
    // this.reactiveForms.get('title')?.setValue('asd');
    // this.newControl.setValue('asd');


    // console.log(this.newControl);
}
