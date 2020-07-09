import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/order';
import { MatTableDataSource } from '@angular/material';
import { Product } from 'src/app/models/product';
import { OrderProductQuantityTotal } from 'src/app/models/order-product-quantity-total';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  order: Order = new Order();
  private productsDataSource: MatTableDataSource<OrderProductQuantityTotal> = new MatTableDataSource<OrderProductQuantityTotal>();

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['orderId'];
    console.log('orderId: ' + id);
    this.orderService.getOrderById(id).subscribe( data => {
      this.order = data;
      this.productsDataSource.data = this.order.productList;
  });
    
}

get columns(): string[] {
  // return a string array of the columns in the table
  // the order of these values will be the order your columns show up in
  return [ 'name', 'price', 'quantityCol'];
}

}
