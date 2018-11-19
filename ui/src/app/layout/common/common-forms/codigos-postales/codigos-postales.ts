import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import {CodigoPostal} from '../../../api/server/models/codigo-postal';
import 'rxjs/add/operator/map';


/*export function codigoPostalValidator(componente): AsyncValidatorFn {

  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const codigo = control.value;

    return MeteorObservable.call('getColonias', codigo).map((colonias : CodigoPostal[]) => {

      if (colonias && colonias.length === 0) {
        control['_parent'].controls['entidadCircul'].patchValue('');
        return  {'codigoInvalido': true};
      } else {
        control['_parent'].controls['entidadCircul'].patchValue(colonias[0].estado);
        return  null;
      }
    });
  };
}*/
