import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private http:HttpClient) { }
  fetchProduct=()=>{
    return this.http.get("https://fakestoreapi.com/products")
  }
    
    
  
}
