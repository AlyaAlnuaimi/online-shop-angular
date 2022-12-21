import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartProducts: Product[] = [];

  constructor(private httpClient:HttpClient){} 

    getFeaturedProduct():any {
        return this.httpClient.get(`${environment.apiUrl}products/getFeatured`
          );
    }
    // we can store the database url in the environment
    getRecentProducts() :any {
      return this.httpClient.get(`${environment.apiUrl}products/getRecent`)
    }

    addProduct(product: Product): void {
      this.cartProducts.push(product);
    }

    getProductById(id:string){
      return this.httpClient.get(`${environment.apiUrl}products/${id}`)
    }

    getProductByCategoryId(id:number){
      return this.httpClient.get(`${environment.apiUrl}products/getByCategoryId/${id}`)
    }
}
