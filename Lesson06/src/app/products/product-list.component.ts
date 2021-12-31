import { Component, OnInit } from '@angular/core';
import { IProduct } from './Product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Acme Product Management';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    private _listFilter: string = '';
    products: Array<IProduct> = [
        {
            "productId": 1,
            "productName": "Leaf Rake (树叶耙)",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2021",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "assets/images/leaf_rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart (手推车)",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
        }
    ];
    filteredProducts: IProduct[] = [];

    ngOnInit(): void {
        console.log('Enters ngOnInit');
        this.listFilter = 'car';
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