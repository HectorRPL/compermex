import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {CLIENTS_MOCK} from "../../models/client/client.mock";

@Injectable({
  providedIn: 'root'
})
export class InMemoryClientService implements InMemoryDbService{

  createDb(){
    let clients = CLIENTS_MOCK;
    return {clients}
  }

  constructor() { }
}
