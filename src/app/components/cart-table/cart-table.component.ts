import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartLine } from 'src/app/interfaces/cart-line';
import { StorageService } from 'src/app/serves/storage.service';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent {

  constructor(private storageService:StorageService){

  }

  @Input() cartLines: CartLine[] = [];

  // to display alert messege if the quantity exceed 10 
  @Output() limitAlert = new EventEmitter<string>();

  incQuantity(i:number){
    this.cartLines[i].quantity +=1;
    this.storageService.save(this.cartLines);
  }

  decQuantity(i:number){
    //to prevent the quantity being on minus ex: (-1) 
    if(this.cartLines[i].quantity > 1)
      this.cartLines[i].quantity -=1;
      this.storageService.save(this.cartLines);
  };

  remove(i:number){
    this.cartLines.splice (i, 1);
    this.storageService.save(this.cartLines);
  };
}
