import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiResponse } from '../models/api.response';
import { Category } from '../models/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.secureCategoryApi}/findAll`);
  }

  public save(category: Category) {
    console.log('category to be saved: ' + JSON.stringify(category));
    return this.http.post<Category>(`${environment.secureCategoryApi}/create`, category);
  }

  public getCategoryById(id: number){
    return this.http.get<Category>(`${environment.secureCategoryApi}/getCategory/` + id);
  }

  public delete(id: string) {
    return this.http.delete<ApiResponse>(
      `${environment.secureCategoryApi}/deleteCategory/` + id
    );
  }
}
