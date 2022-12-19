import { Component } from '@angular/core';
import { ProductService } from 'src/app/serves/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public productService:ProductService){

  }
}
