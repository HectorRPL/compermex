import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HandleError, HttpErrorHandlerService} from '../../../services/http-error-handler.service';
import {catchError} from 'rxjs/operators';
import {Material} from "../models/material.model";

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

  addMaterial(material: Material): Observable<Material> {
    console.log('Dentro del servicio ', material);
    return this.http.post<Material>('/materials/create', material)
      .pipe(
        catchError(this.handleError('add', material))
      );
  }

  getMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>('/materials')
      .pipe(
        catchError(this.handleError('getMaterials', []))
      );
  }

}
