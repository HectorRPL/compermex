import {Component} from '@angular/core';
import {Router} from '@angular/router';
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
      {
        name: 'Compras', icon: 'fas fa-stroopwafel',
        subMenu: [
          {
            subName: 'Lista',
            url: '/layout/compras/list'
          }
        ]
      },
      {
        name: 'Proveedores', icon: 'fas fa-stroopwafel',
        subMenu: [
          {
            subName: 'Lista',
            url: '/layout/suppliers/list'
          }
        ]
      },
      {
        name: 'Alta Orden', icon: 'fas fa-stroopwafel',
        subMenu: [
          {
            subName: 'Alta',
            url: '/layout/orders/create'
          }
        ]
      }
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
