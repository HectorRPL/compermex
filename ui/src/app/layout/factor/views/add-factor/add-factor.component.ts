import { Component, OnInit } from '@angular/core';
import {Factor} from '../../../../models/factor/factor.model';
import {MessagesService} from '../../../../services/message/messages.service';
import {FactorService} from '../../../../services/factor/factor.service';

@Component({
  selector: 'app-add-factor',
  templateUrl: './add-factor.component.html',
  styleUrls: ['./add-factor.component.css']
})
export class AddFactorComponent implements OnInit {

  public factor: Factor;

  constructor(private factorService: FactorService,
              private messagesService: MessagesService) {
    this.factor = new Factor();
  }

  ngOnInit() {
  }

  fn_saveOrUpdate(factor: Factor): void {
    this.factorService.add(factor).subscribe(result => {
      console.log('Entity response: ', result);

      if (result !== null) {
        this.messagesService.success('Los cambios han sido guardados correctamente. ID: ' + this.factor._id.$oid);

        this.factor = new Factor();
      }
    });
  }
}
