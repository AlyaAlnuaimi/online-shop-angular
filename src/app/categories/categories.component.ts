import { Component } from '@angular/core';
import { Category } from '../interfaces/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  //we bring category[] from the interface
  categories:Category[] = [
    {categoryName:'Category 1', imageUrl:'/assets/img/cat-1.jpg', productCount: 120},
    {categoryName:'Category 2', imageUrl:'/assets/img/cat-2.jpg', productCount: 30},
    {categoryName:'Category 3', imageUrl:'/assets/img/cat-3.jpg', productCount: 29},
    {categoryName:'Category 4', imageUrl:'/assets/img/cat-4.jpg', productCount: 100}
  ];
}
