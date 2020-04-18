import { MessengerService } from './../../../../services/messenger.service';
import { Product } from './../../../../models/product';
import { Component, OnInit , Input } from '@angular/core';



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {


  @Input() productItem : Product;


  constructor(private message:MessengerService) { }

  ngOnInit(): void {
  }


  hanndleAddToCart(){
    this.message.sendMsg(this.productItem);
    console.log(this.productItem)
  }


}
