import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'product', pathMatch: 'full'
  },
  {
    path:'product', component: ProductsComponent
  },
  {
    path: 'product', children: [
      {
        path:'details', component: ProductDetailComponent
      }
    ]
  },
  {
    path: 'details', component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
