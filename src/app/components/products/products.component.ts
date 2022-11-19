import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.interface";
import {Subscription} from "rxjs";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  productsSubscription!: Subscription;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {


    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    })
  }

}
