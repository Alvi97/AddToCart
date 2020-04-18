import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productlist: Product[] = [];


  constructor(private ProductService:ProductService) { }

  ngOnInit(): void {

    this.productlist = this.ProductService.getProducts();
    console.log( this.ProductService.getProducts())

  }






}
