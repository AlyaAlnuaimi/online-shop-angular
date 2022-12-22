import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/serves/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
  products:Product[] = [];
  filter:any = {prices:[{min:0,max:0}], 
    sizes:[''], 
    colors:['']};

  constructor(private productService:ProductService) {}

    ngOnInit():void {
      this.productService.getProduct().subscribe((data:any) => {
          this.products = data.data;
      });
    }

    getProducts(): Product[] {
      return this.products.filter((p)=>
            this.filterPrice(p) && this.filterSize(p) && this.filterColor(p)
      );
    }

    filterChange(filter :any){
      this.filter = filter;
    }

    filterPrice(p : Product){
      
      return (
        this.filter.prices.findIndex(
        (x:any) => (x.min<=p.price && x.max >=p.price) || (x.min == 0 && x.max ==0)
      )>=0);
    }

    filterSize(p : Product){
      if(this.filter.sizes.includes('')) return true;
      return this.filter.sizes.includes(p.size);
    }

    filterColor(p : Product){
      if(this.filter.colors.includes('')) return true;
      return this.filter.colors.includes(p.color);
    }
}
