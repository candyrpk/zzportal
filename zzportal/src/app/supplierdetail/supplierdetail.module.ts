import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierDetailRoutingModule } from './supplierdetail.routing';
import { SupplierDetailComponent } from './supplierdetail.component';

@NgModule({
  imports: [
    CommonModule,
    SupplierDetailRoutingModule
  ],
  declarations: [SupplierDetailComponent]
})
export class SupplierDetailModule { }
