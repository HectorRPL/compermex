import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: 'footer.template.html'
})
export class FooterComponent {

  anio: number;

  constructor() {
    this.anio = new Date().getFullYear();
  }
}
