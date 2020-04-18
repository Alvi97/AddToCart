import { Product } from 'src/app/models/product';
import { MessengerService } from './../../../services/messenger.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems =[

    // {id: 1 ,productid :1,productName : 'product1', quantity: 41, price:1020},
    // {id: 3 ,productid :2,productName : 'product2', quantity: 42, price:1030},
    // {id: 2 ,productid :3,productName : 'product3', quantity: 43, price:1400},
    // {id: 4 ,productid :4,productName : 'product4', quantity: 44, price:1500},

  ];


  constructor(private message:MessengerService) { }

  ngOnInit(): void {


    this.message.getMsg().subscribe((product:Product) =>{

    this.addProductsToCart(product);

    })



    console.log(this.cartItems)

    
  }


  
  addProductsToCart(product:Product){
    this.cartItems.push({
      productId:product.id,
      productName:product.name,
      quantity:40,
      price:product.price
    })
  }

}
