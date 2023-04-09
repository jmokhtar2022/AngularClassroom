import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  listProduct!: Product[];
  searchP!: number;

  ngOnInit() {
    this.listProduct =
      [
        { id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0 },
        { id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0 },
        { id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0 }
      ]
  }

  Buy(i: number) {
    this.listProduct[i].quantity--;
  }
  Like(i: number) {
    this.listProduct[i].like++;
  }
  get filteredProducts() {
    return this.listProduct.filter(product => !this.searchP || product.price < this.searchP);
  }



}
