import { NgModule } from '@angular/core';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { ProductDetailGuard } from '../guards/product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductDetailGuard] }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
