
import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // so we can make get and post from the server 
  constructor(private httpClient: HttpClient) { }
  // get the data from database 
  getCategories(): any {
    this.httpClient.get(`${environment.apiUrl}categories/`);
  }
}
