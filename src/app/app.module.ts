import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialDesignModule } from '../material-design/material-design.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { UserComponent } from './components/user/user.component'; 
import { JwtInterceptor } from './utils/jwt.interceptor';
import { ErrorInterceptor } from './utils/ErrorInterceptor';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { MatDialogModule } from "@angular/material";
import { UserModalComponent } from './components/user/user-modal/user-modal.component';
import { CreateProductComponent } from './components/product/create-product/create-product.component';
import { ProductsComponent } from './components/product/products/products.component';
import { DescriptionModalComponent } from './components/product/description-modal/description-modal.component';
import { GenericModalComponent } from './components/modal/generic-modal/generic-modal.component';
import { CategoriesComponent } from './components/category/categories/categories.component';
import { CreateCategoryComponent } from './components/category/create-category/create-category.component';
import { OrdersComponent } from './components/order/orders/orders.component';
import { CreateOrderComponent } from './components/order/create-order/create-order.component';



@NgModule({
  declarations: [
    AppComponent,
    ...fromContainers.containers,
    ...fromComponents.components,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    AddUserComponent,
    EditUserComponent,
    UserModalComponent,
    CreateProductComponent,
    ProductsComponent,
    DescriptionModalComponent,
    GenericModalComponent,
    CategoriesComponent,
    CreateCategoryComponent,
    OrdersComponent,
    CreateOrderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatDialogModule
  ],
  entryComponents: [UserModalComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
