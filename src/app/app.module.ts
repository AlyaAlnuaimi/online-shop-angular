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
    StarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
