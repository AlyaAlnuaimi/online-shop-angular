import { NgModule } from '@angular/core';
//import the direction
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/layouts/home/home.component';
import { ShopComponent } from './components/layouts/shop/shop.component';
import { ShopdetailsComponent } from './components/layouts/shopdetails/shopdetails.component';
import { ContactComponent } from './components/layouts/contact/contact.component';
import { CheckoutComponent } from './components/layouts/checkout/checkout.component';
import { ShoppingcartComponent } from './components/layouts/shoppingcart/shoppingcart.component';
import { CartComponent } from './components/layouts/cart/cart.component';

// roots for every page
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'shop', component: ShopComponent},
  {path:'shopdetails', component: ShopdetailsComponent},
  {path:'contact', component: ContactComponent},
  {path:'checkout', component: CheckoutComponent},
  {path:'shoppingcart', component: ShoppingcartComponent},
  {path:'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
