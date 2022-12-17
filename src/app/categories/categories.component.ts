import { Component, OnInit } from '@angular/core';
import { Category } from '../interfaces/category';
import { CategoryService } from 'src/app/serves/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];
  // to use thr service
  constructor(private categoryService: CategoryService) {}
  // return the data
  ngOnInit() {
    this.categoryService.getCategories().subscribe((data:any) => {
      this.categories = data.data;
    });
    
  }
 /* //we bring category[] from the interface
    {categoryName:'Category 1', imageUrl:'/assets/img/cat-1.jpg', productCount: 120},
    {categoryName:'Category 2', imageUrl:'/assets/img/cat-2.jpg', productCount: 30},
    {categoryName:'Category 3', imageUrl:'/assets/img/cat-3.jpg', productCount: 29},
    {categoryName:'Category 4', imageUrl:'/assets/img/cat-4.jpg', productCount: 100}
  ];*/
}
