import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/layouts/header/header.component';
import { HomeComponent } from './components/layouts/home/home.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { ShopComponent } from './components/layouts/shop/shop.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './components/product/product.component';
import { StarsComponent } from './components/stars/stars.component';
import { ShopdetailsComponent } from './components/layouts/shopdetails/shopdetails.component';
import { ContactComponent } from './components/layouts/contact/contact.component';
import { CheckoutComponent } from './components/layouts/checkout/checkout.component';
import { ShoppingcartComponent } from './components/layouts/shoppingcart/shoppingcart.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/layouts/cart/cart.component';
import { CartTableComponent } from './components/cart-table/cart-table.component';
import { CartTotalComponent } from './components/cart-total/cart-total.component';
import { ProductsFilterComponent } from './components/products-filter/products-filter.component';
import { ProductsShopComponent } from './components/products-shop/products-shop.component';
import { ProductsPaginationComponent } from './components/products-pagination/products-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ShopComponent,
    CategoriesComponent,
    CategoryComponent,
    ProductComponent,
    StarsComponent,
    ShopdetailsComponent,
    ContactComponent,
    CheckoutComponent,
    ShoppingcartComponent,
    ProductsComponent,
    CartComponent,
    CartTableComponent,
    CartTotalComponent,
    ProductsFilterComponent,
    ProductsShopComponent,
    ProductsPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
