import { Directive } from '@angular/core';
import {
  AbstractControl,
  Validator,
  NG_VALIDATORS,
  ValidatorFn,
} from '@angular/forms';
import { ValidatorService } from '../_service/validator.service';
import { IListPseudoMail } from '../_models/i-pseudo-mail-validator';

@Directive({
  selector: '[appPseudoMailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PseudoMailValidatorDirective,
      multi: true,
    },
  ],
})
export class PseudoMailValidatorDirective implements Validator {
  listOfAllPseudoAndMail: IListPseudoMail[] = [];

  constructor(private service: ValidatorService) {}
  public loadList() {
    this.service.getAllPseudoAndMail().subscribe({
      next: data => {
        this.listOfAllPseudoAndMail = data;
        console.log(this.listOfAllPseudoAndMail);
      },
      error: err => {
        console.log(err);
      },
    });
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    console.log(control.value);

    if (control.value && control.value.length != 10) {
      return { PseudoMailInvalid: false };
    }
    return null;
  }
}
