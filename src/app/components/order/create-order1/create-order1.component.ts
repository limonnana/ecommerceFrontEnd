import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Product } from 'src/app/models/product';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';import { distinctUntilChanged, debounceTime, takeUntil } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { DescriptionModalComponent } from '../../product/description-modal/description-modal.component';


@Component({
  selector: 'app-create-order1',
  templateUrl: './create-order1.component.html',
  styleUrls: ['./create-order1.component.scss']
})
export class CreateOrder1Component implements OnInit {
  
  public quantity : number[] = [];
  user: User = new User();
  private productsDataSource: MatTableDataSource<Product> = new MatTableDataSource<Product>();
  private _unsubscribe = new Subject<void>();
  filterTableFormGroup: FormGroup = null;
  //formQuantity: FormGroup = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.quantity[3] = 0;
    this.quantity[6] = 0;
    let userId = this.route.snapshot.params['userId'];
    console.log('User id is: ' + userId);

    this.userService.getUserById(userId)
      .subscribe( data => {
        this.user.name = data.name;
        this.user.phone = data.phone;
        this.user.email = data.email;
        this.user.userId = userId;
    });

  this.filterTableFormGroup = this.buildForm();
  //this.formQuantity = this.buildFormQuantity();
    this.getProducts(); 

    // subscribe to changes that occur on the filterTableFormGroup.filter form control
    // when these changes occur, filter the results of the table
    this.filterTableFormGroup.controls['byName'].valueChanges
      .pipe(
        debounceTime(1500), // wait 1.5sec for the user to finish entering info before applying filter
        distinctUntilChanged(), // only apply the filter if the entered value is distinct
        takeUntil(this._unsubscribe) // once _unsubscribe is applied, stop the listener
      )
      .subscribe((value: string) => {
        if (!isNullOrUndefined(value)) {
          // apply the filter to the data source
          value = value.trim().toLowerCase();
          this.productsDataSource.filter = value;
        }
      });

}

get columns(): string[] {
  // return a string array of the columns in the table
  // the order of these values will be the order your columns show up in
  return [ 'name', 'price', 'description','quantityCol', 'select'];
}

buildForm(): FormGroup {
  return this.fb.group({
    byName:[null]
  });
}

//buildFormQuantity(): FormGroup {
//  return this.fb.group({
//   quantity:['0']
 // });
//}

getProducts(){
  this.productService.getProducts().subscribe(data => {
    this.productsDataSource.data = data;
  });
}

onSelectClick(id, quantity){
  console.log('select id: ' + id + 'quantity: '+ quantity);
 // this.quantity[id] = Number(this.quantity[id]) + Number(quantity);
}

ngAfterViewInit() {
  this.getProducts();
}

ngOnDestroy() {
  // when the component is destroyed, call to _unsubscribe
  // this will stop any active listeners on the component and free up resources
  this._unsubscribe.next();
  this._unsubscribe.complete();
}

 // adds tracking for the data source for faster filtering, and sorting
 trackByFn(user: User) {
  return user.userId;
}

openDialogDescription(description): void {
  const dialogRefDescription = this.dialog.open(DescriptionModalComponent, {
    width: '400px',
    data: {
      description: description
    }
  });

}




}
