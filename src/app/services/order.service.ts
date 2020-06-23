import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { OrderDTO } from '../models/order-dto';
import { OrderDtoResponse } from '../models/order-dto-response';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  public calculateOrder(orderDTO: OrderDTO) : Observable<OrderDtoResponse>{
    return this.http.post<OrderDtoResponse>(`${environment.secureOrderApi}/calculateOrder`, orderDTO);
  }
}
