import { Component, OnInit } from '@angular/core';
import { products } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(
  ) {}
  // products = products;
  ngOnInit(): void {
    console.log(1);
  }
}
