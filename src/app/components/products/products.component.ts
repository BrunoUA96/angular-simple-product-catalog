import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../models/product.interface";
import {Subscription} from "rxjs";
import {ProductsService} from "../../services/products.service";
import {MatDialog} from "@angular/material/dialog";
import {ModalNewProductComponent} from "./modal-new-product/modal-new-product.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products!: Product[];
  limitItemsPage: number = 0;
  productsSubscription!: Subscription;

  constructor(private productsService: ProductsService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalNewProductComponent, {
      width: '250px',
      data: 'Olá, como estas?',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  ngOnDestroy() {
  }
}
