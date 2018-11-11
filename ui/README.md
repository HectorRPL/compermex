# Copermex

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component layout/orders/components/modalTemporal` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Ejemplo:

### models

CREACION DE UN MODULO: EMPLEADOS
`ng generate component layout/employees/components/employees`
`ng generate module layout/employees`
`ng generate service layout/employees`
`ng generate component layout/employees`
`ng generate component layout/employees/views/listEmployees`
`ng generate component layout/employees/views/addEmployee`
`ng generate component layout/employees/components/employeesForm`
`ng generate component layout/employees/components/employeessSearch`
`ng generate class models/employee/employee -type model`


CREACION DE UN MODULO: SUPPLIERS
`ng generate component layout/suppliers`
`ng generate module layout/suppliers`
`ng generate service layout/suppliers`
`ng generate component layout/suppliers`
`ng generate component layout/suppliers/views/listSuppliers`
`ng generate component layout/suppliers/views/addSupplier`
`ng generate component layout/suppliers/components/suppliersForm`
`ng generate component layout/suppliers/components/supplierssSearch`
`ng generate class layout/suppliers/models/employee -type model`

CREACION DE UN MODULO: ORDERS
`ng generate module layout/orders`
`ng generate component layout/orders/components/orders`
`ng generate service layout//orders/service/orders`
`ng generate component layout/orders`
`ng generate component layout/orders/views/addOrder`
`ng generate component layout/orders/views/addSupplier`
`ng generate component layout/orders/components/ordersForm`
`ng generate component layout/orders/components/ordersSearch`
`ng generate component layout/orders/components/suppliersSearchCopy`
`ng generate component layout/orders/components/clientsSearchCopy`
`ng generate class layout/orders/models/employee -type model`

CREACION DE UN MODULO: CUSTOMERS
`ng generate module layout/customers`
`ng generate service layout/customers/service/customers`
`ng generate component layout/customers/components/customers`
`ng generate component layout/customers/views/addCustomer`
`ng generate component layout/customers/views/listCustomers`
`ng generate component layout/customers/components/customersForm`
`ng generate component layout/customers/components/customersSearch`
`ng generate class layout/customers/models/customer -type model`

CREACION DE UN MODULO: MATERIALS
`ng generate module layout/materials`
`ng generate service layout/materials/service/materials`
`ng generate component layout/materials/components/materials`
`ng generate component layout/materials/views/addMaterial`
`ng generate component layout/materials/views/listMaterials`
`ng generate component layout/materials/views/addMaterialMaster`
`ng generate component layout/materials/components/materialsMasterForm`
`ng generate component layout/materials/components/materialsSearch`
`ng generate component layout/materials/components/listMaterialSelected`
`ng generate class layout/materials/models/material -type model`

CREACION DEL MODULO: producción
`ng generate module layout/production`
`ng generate service layout/production/service/production`
`ng generate component layout/production/components/production`
`ng generate component layout/production/views/listProduction`
`ng generate component layout/production/components/productionSearch`
`ng generate class layout/production/models/production -type model`


ng generate component layout/cardboards/components/paperboardsSearch


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
