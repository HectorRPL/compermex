import {Component, OnInit} from '@angular/core';
import {ReceptionService} from '../../service/reception.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Reception} from '../../models/reception.model';
import {Observable} from 'rxjs/Observable';
import {ModalReceivePaperboardComponent} from "../../components/modal-receive-paperboard/modal-receive-paperboard.component";

@Component({
  selector: 'app-list-reception',
  templateUrl: './list-reception.component.html',
  styleUrls: ['./list-reception.component.css']
})
export class ListReceptionComponent implements OnInit {

  receptions$: Observable<Reception[]>;

  constructor(private receptionService: ReceptionService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.receptions$ = this.receptionService.getReceptions();

  }

  openModalRecipe() {
    const modalRef = this.modalService.open(ModalReceivePaperboardComponent,
      {
        size: 'lg',
        backdrop: 'static',
        keyboard: false
      }
    );
    // modalRef.componentInstance.compraPartidaOrden = compraPartidaOrden;
  }

}
