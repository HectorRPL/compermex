import {Employee} from "./employee";


export const EMPLOYEES_MOCK: Employee[] = [
  {
    "_id": {$oid: "1ba11d0b5800000eaa74fe6a"},
    "ownerId": {$oid: "1b121d0b5800000eaa75fe6a"},
    "departmentId": {$oid: "1ba11d0b5800000eaa75fe6a"},
    "storeId": {$oid: "1ba11d0b5900000eaa75fe6a"},
    "names": "Héctor",
    "lastNames": "Flores Vizuet",
    "email": "asdasd@mail.com",
    "sex": 'm',
    "birdDate": new Date('1983-10-31'),
    "phone": 5556769502,
  },
  {
    "_id": {$oid: "2ba11d2e5800000eaa74fe6b"},
    "ownerId": {$oid: "1b121d0b5800000eaa75fe6a"},
    "departmentId": {$oid: "1ba11d0b5800000eaa75fe6a"},
    "storeId": {$oid: "1ba11d0b5900000eaa75fe6a"},
    "names": "Juan",
    "lastNames": "Alejandro Valentín",
    "email": "zzzzzzzz@mail.com",
    "sex": 'm',
    "birdDate": new Date('1983-10-31'),
    "phone": 5556769502,
  },
  {
    "_id": {$oid: "3ba27050560000b1ec6a8bb5"},
    "ownerId": {$oid: "1b121d0b5800000eaa75fe6a"},
    "departmentId": {$oid: "1ba11d0b5800000eaa75fe6a"},
    "storeId": {$oid: "1ba11d0b5900000eaa75fe6a"},
    "names": "Tatiana",
    "lastNames": "Flores Vizuet",
    "email": "qweqwefs@mail.com",
    "sex": 'm',
    "birdDate": new Date('1983-10-31'),
    "phone": 5556769502,
  },
  {
    "_id": {$oid: "4ba274195100009a94ea368d"},
    "ownerId": {$oid: "1b121d0b5800000eaa75fe6a"},
    "departmentId": {$oid: "1ba11d0b5800000eaa75fe6a"},
    "storeId": {$oid: "1ba11d0b5900000eaa75fe6a"},
    "names": "Patroclo",
    "lastNames": "hijo de Menecio",
    "email": "asdasd@mail.com",
    "sex": 'm',
    "birdDate": new Date('1983-10-31'),
    "phone": 5556769502,
  }

];
