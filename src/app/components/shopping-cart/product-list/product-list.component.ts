import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productlist: Product[];

  constructor(private ProductService:ProductService) { }

  ngOnInit(): void {

    this.ProductService.getProducts().subscribe( (products) =>{
      console.log(products , "products")
      this.productlist = products;
    });
    console.log( this.ProductService.getProducts())

  }






}
