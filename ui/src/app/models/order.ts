export class Order {
  // [ini] Encabezado
  quotation:            number; // cotización al parecer son números seriados
  consecutive:          number; // consecutivo al parecer son números seriados
  company:              string; // compañía => Debe ser un autocomplete
  customerOrder?:       string; // pedido cte TODO => no se sabe de donde viene
  saleOrder:            string; // nta. orden, String (cotización, consecutivo, compañia, proveedor)
  providerKey01:        number; // cve. de proveedor => va a ser un autocomplete
  orderDate:            string; // fecha orden
  deliverDate:          string; // fecha entrega
  customerDate:         string; // fecha cte.
  paymentConditions:    string; // condiciones de pago: ej 00/01/1900, 45 dias fecha revisión, esto cambia según el proveedor elegido
  providerKey02:        number; // clave prov.
  // [end] Encabezado

  // PROVEEDOR
  ourKey:               string; // nuestra clave.
  customer:             string;  // cliente => podría ser customerId?
  nameCustomer:         string; // nombre
  minCustomerVariation: number; // % variacion del cte:
  maxCustomerVariation: number; // % variacion del cte:
  plane:                string; // plano
  certificate:          boolean; // certificado

  //
  strength:             string; // resistencia => podría ser strengthId? TODO => tentativo no va en este model
  corrugatedType:       string; // material (1, 2 ó 3) sencillo, doble, micro => podría ser corrugatedTypeId?
  type:                 string; // No es claro de dónde o qué es ésta propiedad

}
