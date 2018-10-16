import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {COMPANIES_MOCK} from '../models/company/company.mock';
import {CLIENTS_MOCK} from '../models/client/client.mock';
import {SUPPLIERS_MOCK} from '../models/supplier/supplier.mock';
import {CARDBOARDS_MOCK} from '../models/cardboard/cardboard.mock';
import {EMPLOYEES_MOCK} from '../models/employee/employee.mock';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    return {
      companies: COMPANIES_MOCK,
      clients: CLIENTS_MOCK,
      suppliers: SUPPLIERS_MOCK,
      cardboard: CARDBOARDS_MOCK,
      employees: EMPLOYEES_MOCK
    };
  }

  constructor() {
  }
}
