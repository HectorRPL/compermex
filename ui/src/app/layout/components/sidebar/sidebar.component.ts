import {Component} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {MenuSideBar} from "../../models/menu-side-bar.model";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isActive: boolean = false;
  showMenu: string = '';
  pushRightClass: string = 'push-right';
  menu: MenuSideBar[];

  constructor(public router: Router) {

    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
        this.toggleSidebar();
      }
    });

    this.createMenu();
  }

  createMenu() {
    this.menu = [
      {name: 'Compras', icon: 'fa fa-industry',     subMenu: [{subName: 'Lista', url: '/layout/compras/list'}]},
      {name: 'Proveedores', icon: 'fa fa-industry', subMenu: [{subName: 'Forma', url: '/layout/suppliers/list'}]},
      {name: 'Alta Orden', icon: 'fa fa-industry', subMenu: [{subName: 'Alta', url: '/layout/orders/create'}]}
    ];
  }

  eventCalled() {
    this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

}
