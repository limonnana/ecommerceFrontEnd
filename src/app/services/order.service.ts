import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { OrderDTO } from '../models/order-dto';
import { OrderDtoResponse } from '../models/order-dto-response';
import { Order } from '../models/order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  public getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.secureOrderApi}/findAll`);
  }

  public calculateOrder(orderDTO: OrderDTO) : Observable<OrderDtoResponse>{
    return this.http.post<OrderDtoResponse>(`${environment.secureOrderApi}/calculateOrder`, orderDTO);
  }

  public finishOrder(orderDtoResponse: OrderDtoResponse) : Observable<OrderDtoResponse>{
    return this.http.post<OrderDtoResponse>(`${environment.secureOrderApi}/finishOrder`, orderDtoResponse);
  }
  
  public getOrderById(id: number){
    return this.http.get<Order>(`${environment.secureOrderApi}/getOrder/` + id);
  }


}
