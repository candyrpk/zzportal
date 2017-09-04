import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'gallery',
        loadChildren: './gallery/gallery.module#GalleryModule'
      },
      {
        path: 'supplier-list',
        loadChildren: './supplierlist/supplierlist.module#SupplierListModule'
      },
      {
        path: 'supplier-details',
        loadChildren: './supplierlist/supplierlist.module#SupplierDetailModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}