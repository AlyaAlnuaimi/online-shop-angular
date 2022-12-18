import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient){} 

    getFeaturedProduct():any {
        return this.httpClient.get(`${environment.apiUrl}products/getFeatured`
          );
    }
    // we can store the database url in the environment
    getRecentProducts() :any {
      return this.httpClient.get(`${environment.apiUrl}products/getFeatured`)
    }
}
