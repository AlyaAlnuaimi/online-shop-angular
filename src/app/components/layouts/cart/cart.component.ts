import { Component } from '@angular/core';
import { CartLine } from 'src/app/interfaces/cart-line';
import { StorageService } from 'src/app/serves/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  // big component => i want to send to cart table 
  cartLines:CartLine[] = [];

  constructor(private storageService:StorageService){
    this.cartLines = storageService.getCartLines();
  }

getTotal():number {
  return this.getShipping() + this.getSubTotal();
  }
getSubTotal():number{
  return this.cartLines
  .map((x) => x.price * x.quantity)
  .reduce((a,v) => (a += v), 0);
  }
getShipping():number{
  return ( this.cartLines
  .map((x) => x.quantity)
  .reduce((a,v) => (a += v), 0) * 2);
  }
}
