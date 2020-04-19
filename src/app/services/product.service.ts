import { produtsUrl } from '../config/api';
import { HttpClient  } from '@angular/common/http';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService { 

  constructor(private http : HttpClient ) { }


  getProducts() : Observable<any>{  
    return this.http.get(produtsUrl) 
    console.log(produtsUrl , "aaaaa");
  }

}
