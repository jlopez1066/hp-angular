import { Component, OnInit } from '@angular/core';

import { promos } from '../promos';

@Component({
  selector: 'app-promo-module',
  templateUrl: './promo-module.component.html',
  styleUrls: ['./promo-module.component.css']
})
export class PromoModuleComponent implements OnInit {
  promos = promos;
  constructor() { }

  ngOnInit() {
  }

}