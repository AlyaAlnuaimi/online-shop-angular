import { Injectable } from '@angular/core';
import { CartLine } from '../interfaces/cart-line';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  addProduct(product: Product, quantity:number){
    //add product to localstorage as flat products (array pf products not cartlines)
  }

  getCartLines(): CartLine[] {
    //convert array of products into caartlines array and return it 
    return[];
  }
}
