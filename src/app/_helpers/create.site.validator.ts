import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ValidatorService } from '../_service/validator.service';

export class CreateSiteValidator {
  static validateLatitude(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (value >= -180 && value <= 180) {
        return null;
      }
      return {
        valideLat: true,
      };
    };
  }
  static validateLongitude(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (value >= -90 && value <= 90) {
        return null;
      }
      return {
        valideLong: true,
      };
    };
  }
}
