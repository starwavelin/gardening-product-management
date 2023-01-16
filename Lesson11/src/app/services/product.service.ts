import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap  } from 'rxjs/operators';
import { IProduct } from '../interfaces/Product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productUrl = 'api/products/products.json';
    private productListObservable$ : Observable<IProduct[]>;

    constructor(private http: HttpClient) {
        this.productListObservable$ = this.http.get<IProduct[]>(this.productUrl);
    }

    getProducts(): Observable<IProduct[]> {
        return this.productListObservable$
            .pipe(
                tap((data: IProduct[]) => console.log('All: ', JSON.stringify(data))),
                catchError(this._handleError)
            );
    }

    private _handleError(err: HttpErrorResponse) {
        let errMsg = '';
        if (err.error instanceof ErrorEvent) {
            errMsg = `An error occurred: ${err.error.message}`;
        } else {
            errMsg = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errMsg);
        return throwError(errMsg);
    }
}

