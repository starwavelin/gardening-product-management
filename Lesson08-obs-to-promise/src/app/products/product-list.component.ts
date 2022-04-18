import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProduct } from './Product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Acme Product Management';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    private _listFilter: string = ''; 
    products: Array<IProduct> = [];   
    filteredProducts: IProduct[] = [];
    errorMessage: string = '';

    constructor(private productService: ProductService) { }

    async ngOnInit(): Promise<void> {
        console.log('Enters ngOnInit');
        this.products = await this.productService.getProducts();
        this.filteredProducts = this.products;
    }

    ngOnDestroy() {
        
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(val: string) {
        this._listFilter = val;
        this.filteredProducts = this.filter();
    }

    filter(): Array<IProduct> {        
        return this.products.filter(p => p.productName.toLowerCase().includes(this.listFilter.toLowerCase()));
    }

    onNotify(eventMsg: string): void {
        console.log(`${eventMsg} recorded in product-list component`);
    }
}