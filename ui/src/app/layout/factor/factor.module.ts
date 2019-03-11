import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FactorComponent} from './components/factor/factor.component';
import {FactorFormComponent} from './components/factor-form/factor-form.component';
import {ListFactorComponent} from './views/list-factor/list-factor.component';
import {AddFactorComponent} from './views/add-factor/add-factor.component';
import {FactorsRoutingModule} from './factor-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchesModule} from '../searches/searches.module';
import {FactorService} from '../../services/factor/factor.service';
import {FactorPageService} from '../../services/factor/factor-page.service';
import {SelectorsModule} from '../components/selectors/selectors.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FactorsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SearchesModule,
    SelectorsModule
  ],
  declarations: [
    FactorComponent,
    FactorFormComponent,
    ListFactorComponent,
    AddFactorComponent
  ],
  providers: [
    FactorService,
    FactorPageService
  ]
})
export class FactorModule {
}
