import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {CLIENT} from "../../models/client/client.mock";

@Injectable({
  providedIn: 'root'
})
export class InMemoryClientService implements InMemoryDbService{

  createDb(){
    let clients = CLIENT;
    return {clients}
  }

  constructor() { }
}
