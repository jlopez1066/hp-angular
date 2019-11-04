import { Component } from '@angular/core';
import { promos } from './promos';

import { coupons } from './coupons';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  promos = promos;
  coupons = coupons;
}
