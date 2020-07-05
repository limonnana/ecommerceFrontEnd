import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDTO } from 'src/app/models/order-dto';
import { OrderService } from 'src/app/services/order.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { OrderProductQuantityTotal } from 'src/app/models/order-product-quantity-total';
import { OrderDtoResponse } from 'src/app/models/order-dto-response';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  private userId = null;
  private name = null;
  private  user: User = new User();
  private orderId = null;
  orderDTO = new OrderDTO();
  orderProductQuantityTotalList: OrderProductQuantityTotal[] = null;
  private orderSource : MatTableDataSource<OrderProductQuantityTotal>;
  private orderDtoResponse: OrderDtoResponse = new OrderDtoResponse();
  dataSource = new MatTableDataSource<any>();
  private totalTotal: string;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    console.log('User id is: ' + this.userId);
    this.orderDTO.userId = this.userId;
    this.writeMapInDTO();
    this.orderService.calculateOrder(this.orderDTO).subscribe(data => {
    this.userId = data.user.userId;
    this.orderId = data.orderId;
    this.name = data.user.name;
    this.totalTotal = data.totalTotal;
    this.orderProductQuantityTotalList = data.orderProductQuantityTotal;
   // this.dataSource = this.orderProductQuantityTotalList;
    this.orderSource = new MatTableDataSource(this.orderProductQuantityTotalList);            
    });
  }


  get columns(): string[] {
    
    return ['productId' , 'name', 'price' ,'quantity',  'add', 'substract', 'total'];
  }

  writeMapInDTO(){
    let mapString = localStorage.getItem('order_' + this.userId);
    var obj = JSON.parse(mapString);
    console.log('MYMAP: ' + mapString);
    this.parseObject(obj);
    console.log('Order: ' + JSON.stringify(this.orderDTO));
  }

   parseObject(obj)
  {
   for(var key in obj)
   {
      console.log("key: " + key + ", value: " + obj[key]);
      this.orderDTO.productsQuantities.set(key, obj[key]);
      if(obj[key] instanceof Object)
      {
        this.parseObject(obj[key]);
      }
   }
}

  onAddClick(row){
    const productIndex = this.orderSource.data.findIndex(orderProductQuantityTotal => orderProductQuantityTotal.productId === row.productId);
    let opqt = this.orderSource.data[productIndex];
    opqt.quantity = opqt.quantity + 1;
    opqt.total = String(opqt.quantity * + opqt.price);
    let totalNumber = (+ this.totalTotal) + ( + opqt.price);
    this.totalTotal = String(totalNumber);
    console.log('total: ' + opqt.total);
    this.orderSource._updateChangeSubscription();
  }

  onSubstractClick(row){
    const productIndex = this.orderSource.data.findIndex(orderProductQuantityTotal => orderProductQuantityTotal.productId === row.productId);
    let orderProductQuantityTotalTemp = this.orderSource.data[productIndex];
    orderProductQuantityTotalTemp.quantity =  orderProductQuantityTotalTemp.quantity - 1;
    orderProductQuantityTotalTemp.total = String(orderProductQuantityTotalTemp.quantity * + orderProductQuantityTotalTemp.price);
    let totalNumber = (+ this.totalTotal) - ( + orderProductQuantityTotalTemp.price);
    this.totalTotal = String(totalNumber);
    this.orderSource._updateChangeSubscription();
  }

  finishCheckOut(){
    this.orderDtoResponse.orderId = this.orderId;
    this.orderDtoResponse.orderProductQuantityTotal = this.orderProductQuantityTotalList;
    this.orderService.finishOrder(this.orderDtoResponse).subscribe(data => {
      console.log('Data: ' + data.orderId + ' totalTotal:  ' + data.totalTotal);
     
    });

    this.router.navigate(['users']);
  }

  

 
}
