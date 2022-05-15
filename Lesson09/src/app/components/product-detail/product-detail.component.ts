import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'pm-product-detail', // this component is no need for nesting 
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Details';

  constructor() { }

  ngOnInit(): void {
  }

}
