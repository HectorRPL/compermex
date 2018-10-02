import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-search',
  templateUrl: './clients-search.component.html',
  styleUrls: ['./clients-search.component.css']
})
export class ClientsSearchComponent implements OnInit {

  model: any;
  searching = false;
  searchFailed1 = false;

  constructor() { }

  ngOnInit() {
  }

}
