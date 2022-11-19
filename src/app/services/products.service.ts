import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseAPI: string = ' http://localhost:3000/products';

  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get<Product[]>(this.baseAPI)
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.baseAPI}/${id}`)
  }
}
