import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierListRoutingModule } from './supplierlist.routing';
import { SupplierListComponent } from './supplierlist.component';

@NgModule({
  imports: [
    CommonModule,
    SupplierListRoutingModule
  ],
  declarations: [SupplierListComponent]
})
export class SupplierListModule { }
