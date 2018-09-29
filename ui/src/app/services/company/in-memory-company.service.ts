import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {COMPANY} from "../../models/company/company.mock";

@Injectable({
  providedIn: 'root'
})
export class InMemoryCompanyService implements InMemoryDbService {

  createDb() {
    return {COMPANY};
  }

  constructor() { }
}
