export class Material {
  // PANEL ARTÍCULO
  key: string;
  ourKey: string;
  type: number;
  cia: number;
  client: number;

  // <!--PANEL MEDIDAS-->
  long: number; // Largo
  width: number; // Ancho
  height: number; // Alto
  slots: number; // Ranuras

  // <!--PANEL ESPEFIFICACIONES DE MATERIAL-->
  purchase: number;
  sale: number;
  sellerPrice: number;
  maxPercentage: number;
  minPercentage: number;
  certificate: number;
  flat: number;
}
