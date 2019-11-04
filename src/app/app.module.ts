import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PromoModuleComponent } from './promo-module/promo-module.component';
import { CouponModuleComponent } from './coupon-module/coupon-module.component';

@NgModule({
  imports: [ BrowserModule, 
      FormsModule 
  ],
  declarations: [ 
      AppComponent, 
      PromoModuleComponent,
      CouponModuleComponent 
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }

