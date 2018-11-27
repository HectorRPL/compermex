import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import {ColoniesService} from "../../../../services/colonies/colonies.service";
import {ZipCode} from "../../../../models/zip-code/zip-code.model";


export function zipCodeValidator(coloniesService: ColoniesService, component): AsyncValidatorFn {
  console.log('[component]');
  console.log(component);

  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const zipCode = control.value;

    return coloniesService.getColonies(zipCode).map((zipCodes: ZipCode[]) => {
      console.log('control');
      console.log(control['_parent']);

      if (zipCodes && zipCodes.length === 0) {
        control['_parent'].controls['city'].patchValue('');
        control['_parent'].controls['state'].patchValue('');
        // control['_parent'].controls['stateCode'].patchValue('');
        control['_parent'].controls['colony'].patchValue('');
        return {'codigoInvalido': true};
      } else {
        console.log(zipCodes);
        control['_parent'].controls['city'].patchValue(zipCodes[0].city);
        control['_parent'].controls['state'].patchValue(zipCodes[0].state);
        // control['_parent'].controls['stateCode'].patchValue(zipCodes[0].stateCode);
        control['_parent'].controls['colony'].patchValue(zipCodes);
        component.colonies = Array.from(zipCodes);
        return null;
      }
    });
  };
}

