import { Component, OnInit } from '@angular/core';
import { CartLine } from 'src/app/interfaces/cart-line';
import { StorageService } from 'src/app/serves/storage.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent{
  constructor(private storageService:StorageService) { 
      this.cartLines = storageService.getCartLines();   
  }
  cartLines:CartLine[] = [];


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
  ngOnInit(): void {
  }
}
