import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component'; 
import { UserComponent } from './components/user/user.component';
import * as fromContainers from './containers';
import { AuthGuard } from './auth-guard';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { ProductsComponent } from './components/product/products/products.component';
import { CreateProductComponent } from './components/product/create-product/create-product.component';
import { CategoriesComponent } from './components/category/categories/categories.component';
import { CreateCategoryComponent } from './components/category/create-category/create-category.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: fromContainers.DashboardContainerComponent
  },
  {
    path: 'accounts',
    loadChildren: 'src/accounts/accounts.module#AccountsModule'
  }, 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users',
    component: UserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'addUser',
    component: AddUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'editUser',
    component: EditUserComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path:'createCategory',
    component: CreateCategoryComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path:'editCategory',
    component: CreateCategoryComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path:'products',
    component: ProductsComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'create-product',
    component: CreateProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'editProduct',
    component: CreateProductComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
