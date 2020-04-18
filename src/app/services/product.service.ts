import { Product } from './../models/product';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ProductService {




  products : Product[] = [
    new Product(1 , 'Product1' , 'Product1 Description' , 101 , 'https://globe.al/images/thumbnails/700/700/detailed/345/B9LPHPNB15RB026NIA8AN18EAPK_main.jpg' ),
    new Product(2 , 'Product1' , 'Product2 Description' , 120 ,'https://globe.al/images/thumbnails/700/700/detailed/345/B9LPHPNB15RB026NIA8AN18EAPK_main.jpg'),
    new Product(3 , 'Product1' , 'Product3 Description' , 1200 ),
    new Product(4 , 'Product1' , 'Product4 Description' , 1020 ),
    new Product(5 , 'Product1' , 'Product5 Description' , 1020 ),
  ]



  constructor() { }


  getProducts() : Product[]{
    return this.products
  }

}
