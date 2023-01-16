import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from '../../interfaces/Product';
import { ProductService } from '../../services/product.service';

@Component({
    //selector: 'pm-product-detail', // this component is no need for nesting 
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

    pageTitle: string = 'Product Details';

    product: IProduct | undefined;

    productSub!: Subscription;

    constructor(private route: ActivatedRoute,
        private productService: ProductService,
        private router: Router) {
            
    }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.pageTitle += `: ${id}`;

        this.productSub = this.productService.getProducts().subscribe({
            next: (products) => 
                this.product = products.filter(p => p.productId === id)[0]
            ,
            error: () => {},
            complete: () => {}
        });
    }

    onBack(): void {
        this.router.navigate(['/products']);
    }

}
