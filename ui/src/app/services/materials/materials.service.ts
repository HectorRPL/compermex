import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HandleError, HttpErrorHandlerService} from '../http-error-handler.service';
import {catchError} from 'rxjs/operators';
import {Material} from '../../layout/materials/models/material.model';
import {MaterialsMaster} from "../../layout/materials/models/materials-master.model";
import {Color} from "../../models/material/color.model";
import {Strength} from "../../models/material/strengths.model";
import {Type} from "../../models/material/type.model";

@Injectable({
  providedIn: 'root'
})
export class MaterialsService {

  private handleError: HandleError;

  constructor(public http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('MaterialsService');
  }

  searchMaterials(name: String): Observable<Material[]> {
    return this.http.get<Material[]>(`/materials/search/${name}`)
      .pipe(
        catchError(this.handleError('searchMaterials', []))
      );
  }

  searchColors(name: String): Observable<Color[]> {
    return this.http.get<Color[]>(`/materials/colors/search/${name}`)
      .pipe(
        catchError(this.handleError('searchColors', []))
      );
  }

  searchStrengths(name: String): Observable<Strength[]> {
    return this.http.get<Strength[]>(`/materials/strengths/search/${name}`)
      .pipe(
        catchError(this.handleError('searchStrengths', []))
      );
  }

  searchTypes(name: String): Observable<Type[]> {
    return this.http.get<Type[]>(`/materials/types/search/${name}`)
      .pipe(
        catchError(this.handleError('searchTypes', []))
      );
  }

  searchBoxes(name: String): Observable<MaterialsMaster[]> {
    return this.http.get<MaterialsMaster[]>(`/boxes/search/${name}`)
      .pipe(
        catchError(this.handleError('searchBoxes', []))
      );
  }

  addMaterial(box: Material): Observable<Material> { // TODO => debes nombrarlo como box, no como material.
    console.log('Dentro del servicio ', box);
    return this.http.post<Material>('/add/box', box)
      .pipe(
        catchError(this.handleError('add', box))
      );
  }

  getMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>('/materials')
      .pipe(
        catchError(this.handleError('getMaterials', []))
      );
  }

}
