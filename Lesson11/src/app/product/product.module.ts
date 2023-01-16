import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { StarComponent } from '../components/star/star.component';
import { ConvertToSpacesPipe } from '../pipes/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { ProductDetailGuard } from '../guards/product-detail.guard';

@NgModule({
  declarations: [
    ProductListComponent,
    StarComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductDetailGuard] }
    ])
  ]
})
export class ProductModule { }
