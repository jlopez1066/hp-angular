import { Component, OnInit } from '@angular/core';

import { coupons } from '../coupons';

@Component({
  selector: 'app-coupon-module',
  templateUrl: './coupon-module.component.html',
  styleUrls: ['./coupon-module.component.css']
})
export class CouponModuleComponent implements OnInit {
  coupons = coupons
  constructor() { }

  ngOnInit() {
  }

}