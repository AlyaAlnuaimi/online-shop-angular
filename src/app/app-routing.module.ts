import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/layouts/home/home.component';
import { ShopComponent } from './components/layouts/shop/shop.component';
// roots for every page
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'shop', component: ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
