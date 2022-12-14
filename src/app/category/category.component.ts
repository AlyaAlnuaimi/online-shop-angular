import { Component, Input } from '@angular/core';
import { Category } from '../interfaces/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
      // we used interface 
  @Input() category:Category = {} as Category;
 }
