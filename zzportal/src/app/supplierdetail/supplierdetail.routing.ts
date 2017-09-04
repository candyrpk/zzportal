import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupplierDetailComponent } from './supplierdetail.component';

const routes: Routes = [
  {
    path: '',
    component: SupplierDetailComponent,
    data: {
      title: 'Supplier Detail'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierDetailRoutingModule { }