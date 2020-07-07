import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable, Sort } from '@angular/material/sort';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  private dataSource = new MatTableDataSource<Order>([]);

  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  @ViewChild(MatSort, { static: true })
  sort: MatSort;

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(data => {
      this.dataSource.data = data;
    });

    this.sort.sort(({ id: 'orderId', start: 'desc'}) as MatSortable);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  get columns(): string[] {
    return ['orderId' , 'created', 'totalTotal', 'select'];
  }

  
  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;
 
  
  onSelectClick(id){
    console.log('select id: ' + id);
    this.router.navigate(['order',{orderId:id}]);
  }
  

}
