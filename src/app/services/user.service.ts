import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '.././models/user';
import { Login } from '.././models/login';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ApiResponse } from '.././models/api.response';
import { HttpCustomService } from './http-custom.service';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  error: string | undefined;

  constructor(
    private http: HttpClient,
    private httpCustom: HttpCustomService
  ) {}

 
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.secureUserApi}/findAll`);
  }

  public save(user: User) {
    console.log(JSON.stringify(user));
    return this.http.post<User>(`${environment.secureUserApi}/create`, user);
  }

  public register(register: Register) {
    console.log(JSON.stringify(register));
    return this.http.post<User>(`${environment.domain}/register`, register);
  }

  public delete(id: string) {
    return this.http.delete<ApiResponse>(
      `${environment.secureUserApi}/deleteUser/` + id
    );
  }

  getUserById(id: number) {
    return this.http.get<User>(`${environment.secureUserApi}/getUser/` + id);
  }

  updateUser(user: User): Observable<ApiResponse> {
    return this.http
      .put<ApiResponse>(
        `${environment.secureUserApi}/updateUser/` + user.userId,
        user
      )
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  isEmailTaken(login: Login): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(
      `${environment.domain}/emailTaken/`, login 
    );
  }

  handleError(error: {
    error: { message: string };
    status: any;
    message: any;
  }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
