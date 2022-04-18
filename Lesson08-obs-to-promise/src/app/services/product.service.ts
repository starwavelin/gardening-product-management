import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../products/Product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient) {}

    async getProducts(): Promise<IProduct[]> {
        return (await this.http.get(this.productUrl, { observe: 'response' }).toPromise()).body as IProduct[];
    }
}