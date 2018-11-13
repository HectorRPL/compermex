import {Component} from '@angular/core';
import {Router} from '@angular/router';
import 'jquery-slimscroll';
import {AuthService} from "ng2-ui-auth";
import {UserService} from "../../../services/auth/user.service";
import {AreasService} from "../../../services/areas/areas.service";
import {Area} from "../../../models/area/client.model";

declare var jQuery: any;

@Component({
  selector: 'navigation',
  templateUrl: 'navigation.template.html'
})

export class NavigationComponent {

  public area: Area;

  constructor(private router: Router,
              private areasService: AreasService,
              private userService: UserService) {
  }

  ngAfterViewInit() {
    jQuery('#side-menu').metisMenu();

    if (jQuery("body").hasClass('fixed-sidebar')) {
      jQuery('.sidebar-collapse').slimscroll({
        height: '100%'
      })
    }
  }

  activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }

  ngOnInit(){

    this.userService.renewUser().then((user)=>{
      console.log(user);
      this.getArea(user.areaId.$oid)
    });
  }


  getArea(areaId: String){
    this.areasService.getArea(areaId).subscribe({
      next: value => this.area = value
    })

  }




}
