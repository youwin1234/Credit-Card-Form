import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';
import { CardNumberFormControl } from '../card-number-form-control';
import { CodeFormControl } from '../code-form-control';
import { NameFormControl } from '../name-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new NameFormControl('', [Validators.required, Validators.minLength(2),Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/), Validators.maxLength(26)]),
    cardNumber: new CardNumberFormControl('', [Validators.required, Validators.minLength(19), 
      Validators.pattern(/^(?:(?<visa>4[0-9]{3}\-{1}[0-9]{4}\-{1}[0-9]{4}\-{1}(?:[0-9]{4})?)|(?<mastercard>5[1-5][0-9]{2}\-{1}[0-9]{4}\-{1}[0-9]{4}\-{1}[0-9]{4})|(?<discover>6(?:011|5[0-9]{2})\-{1}[0-9]{4}\-{1}[0-9]{4}\-{1}[0-9])|(?<amex>3[47][0-9]{1}\-{1}[0-9]{4}\-{1}[0-9]{4}\-{1}[0-9]{4}))$/),
      Validators.maxLength(19)]),
    expiration: new DateFormControl('', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]),
    securityCode: new CodeFormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[0-9]{3,4}$/),Validators.maxLength(4)])
  });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('Form was submitted');
  }

  onReset(){
    this.cardForm.reset();
  }
}
