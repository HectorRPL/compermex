import {Component} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {MenuSideBar} from "../../models/menu-side-bar.model";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  showMenu: string = '';
  menu: MenuSideBar[];

  constructor(public router: Router) {

    this.createMenu();
  }

  createMenu() {
    this.menu = [
      {name: 'Compras', icon: 'fa fa-industry',     subMenu: [{subName: 'Lista', url: '/layout/compras/list'}]},
      {name: 'Proveedores', icon: 'fa fa-industry', subMenu: [{subName: 'Forma', url: '/layout/suppliers/list'}]},
      {name: 'Alta Orden', icon: 'fa fa-industry', subMenu: [{subName: 'Alta', url: '/layout/orders/create'}]}
    ];
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

}
