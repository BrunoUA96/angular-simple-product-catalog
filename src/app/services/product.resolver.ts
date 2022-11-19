import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {catchError, EMPTY, Observable, of} from 'rxjs';
import {Product} from "../models/product.interface";
import {ProductsService} from "./products.service";
import {log} from "util";

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product> {

  constructor(private productsService: ProductsService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    return this.productsService.getProduct(route.params['id']).pipe(
      catchError(() => {
        this.router.navigate(['products']).then(() => console.log("Product doesn't exist"));
        return EMPTY;
      })
    )
  }
}
