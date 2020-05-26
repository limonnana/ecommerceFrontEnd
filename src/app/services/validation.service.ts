import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { User } from '../models/user';
import { Product } from '../models/product';
import { Register } from '../models/register';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  constructor() {}

  validateNewProductForm(product: Product){
    let error: string = '';

    if (!product.name) {
      error = ' name is required ';
    }
    if(!product.price) {
      error = ' price is required ';
    }
    return error;
  }

  validateNewCategoryForm(category: Category){
    let error: string = '';

    if (!category.name) {
      error = ' name is required ';
    }
    return error;
  }

  validateNewUserForm(user: User): string{
    let error: string = '';

    if (!user.email) {
      error = ' email is required ';
    }
    if (this.emailValidator(user.email)) {
      error = (error ? '' : error) + ' email is not valid ';
    }
    return error;
  }

  validateRegisterForm(register: Register): string {
    let error: string = '';

    if(!register.fullName){
      error = (error ? '' : error) + ' full name is required'
    }
    if(!register.phone){
      error = (error ? '' : error) + ' phone is required !';
    }
    if (!register.email) {
      error = (error ? '' : error) + ' email is required ';
    }
    if (this.emailValidator(register.email)) {
      error = (error ? '' : error) + ' email is not valid ';
    }
    if (this.passwordValidator(register.password)) {
      error = (error ? '' : error) + ' password is not valid , must have between 6 and 17 characters and at least one number';
    }
    if (this.retypePassword(register.password, register.retypePassword)) {
      error =
        (error ? '' : error) + " password and retype password don't match ";
    }
    
    // TODO validate password
    return error;
  }

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      required: 'Required',
      invalidEmailAddress: 'Invalid email address',
      invalidPassword:
        'Invalid password. Password must be at least 6 characters long, and contain a number.',
      minlength: `Minimum length ${validatorValue.requiredLength}`
    };

    return config[validatorName];
  }

  emailValidator(email: string) {
    // RFC 2822 compliant regex
    
    if (
      email.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      )
    ) {
      return null;
    } else {
      return { invalidEmailAddress: true };
    }
  }

  passwordValidator(password: string) {
    // {6,17}           - Assert password is between 6 and 17 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (password.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return { invalidPassword: true };
    }
  }

  retypePassword(password: string, retypePassword: string) {
    if (password === retypePassword) {
      return null;
    } else {
      return { invalidRetpePassword: true };
    }
  }
  
}
