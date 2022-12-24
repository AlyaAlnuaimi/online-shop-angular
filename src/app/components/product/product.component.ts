import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/serves/product.service';
import { StorageService } from 'src/app/serves/storage.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product = {} as Product;

  constructor(private storageService: StorageService){}

  addProductToCart(){
    this.storageService.addProduct(this.product, 1);
  }
}
