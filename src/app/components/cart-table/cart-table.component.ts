import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartLine } from 'src/app/interfaces/cart-line';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent {
  @Input() cartLines: CartLine[] = [];

  // to display alert messege if the quantity exceed 10 
  @Output() limitAlert = new EventEmitter<string>();

  incQuantity(i:number){
    this.cartLines[i].quantity +=1;
    // if the quantity exceed 10 
    if(this.cartLines[i].quantity>10){
      this.limitAlert.emit('You have exceed the limit')
    }
  };

  decQuantity(i:number){
    //to prevent the quantity being on minus ex: (-1) 
    if(this.cartLines[i].quantity > 1)
      this.cartLines[i].quantity -=1;
    if(this.cartLines[i].quantity < 2){
      this.limitAlert.emit('please increase the value')
      }
  };

  remove(i:number){
    this.cartLines.splice (i, 1);
  };
}
