import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {COMPANIES_MOCK} from '../models/company/company.mock';
import {CLIENTS_MOCK} from '../models/client/client.mock';
import {SUPPLIERS_MOCK} from '../models/supplier/supplier.mock';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    let companies = COMPANIES_MOCK;
    let clients = CLIENTS_MOCK;
    let suppliers = SUPPLIERS_MOCK;
    return {companies, clients, suppliers};
  }

  constructor() { }
}
