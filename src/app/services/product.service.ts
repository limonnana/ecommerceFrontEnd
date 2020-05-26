import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpCustomService } from './http-custom.service';
import { Product } from '../models/product';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiResponse } from '../models/api.response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.secureProductApi}/findAll`);
  }

  public save(product: Product) {
    console.log(JSON.stringify(product));
    return this.http.post<Product>(`${environment.secureProductApi}/create`, product);
  }

  public getProductById(id: number){
    return this.http.get<Product>(`${environment.secureProductApi}/getProduct/` + id);
  }

  public delete(id: string) {
    return this.http.delete<ApiResponse>(
      `${environment.secureProductApi}/deleteProduct/` + id
    );
  }
}
