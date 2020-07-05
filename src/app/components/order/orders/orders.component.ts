import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  private dataSource = new MatTableDataSource<Order>([]);

  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  get columns(): string[] {
    return ['orderId' , 'created', 'totalTotal'];
  }

}
