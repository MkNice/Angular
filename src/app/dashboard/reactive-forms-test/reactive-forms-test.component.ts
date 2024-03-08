import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-reactive-forms-test',
  templateUrl: './reactive-forms-test.component.html',
  styleUrls: ['./reactive-forms-test.component.scss'],
})
export class ReactiveFormsTestComponent {
  public RForms: FormGroup;
  /*
  = new FormGroup({
    login : new FormControl(null),
    passwpord : new FormControl(null),
    tip : new FormControl(null),
  }) ;
  */

  public constructor(private FB: FormBuilder) {
    this.RForms = this.FB.group({
      login: [null, [Validators.required, Validators.maxLength(10)]],
      passwpord: [null, [Validators.required, Validators.maxLength(10)]],
      tip: [null, [Validators.required, Validators.maxLength(10)]],
    });
  }
}
