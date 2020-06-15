import { User } from 'src/app/models/user';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime, takeUntil } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { UserService } from 'src/app/services/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {
  
  private usersDataSource: MatTableDataSource<User> = new MatTableDataSource<User>();
  private _unsubscribe = new Subject<void>();
  filterTableFormGroup: FormGroup = null;
 
  constructor
  (
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //this.newProductFormGroup = this.buildForm();
    this.filterTableFormGroup = this.buildForm();
    this.getUsers(); 

    // subscribe to changes that occur on the filterTableFormGroup.filter form control
    // when these changes occur, filter the results of the table
    this.filterTableFormGroup.controls['byPhone'].valueChanges
      .pipe(
        debounceTime(1500), // wait 1.5sec for the user to finish entering info before applying filter
        distinctUntilChanged(), // only apply the filter if the entered value is distinct
        takeUntil(this._unsubscribe) // once _unsubscribe is applied, stop the listener
      )
      .subscribe((value: string) => {
        if (!isNullOrUndefined(value)) {
          // apply the filter to the data source
          value = value.trim().toLowerCase();
          this.usersDataSource.filter = value;
        }
      });

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
          this.usersDataSource.filter = value;
        }
      });
  }

  get columns(): string[] {
    // return a string array of the columns in the table
    // the order of these values will be the order your columns show up in
    return ['phone','name', 'email', 'select'];
  }

  // add ViewChild support for the table MatPagionator
  // allows us to register the paginator with the MatTable
  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;
  // add ViewChild support fot the table column sorting
  // allows us to register the table column sorting with the Mat Table
  @ViewChild(MatSort, { static: true })
  sort: MatSort;


  onSelectClick(id){
    console.log('select id: ' + id);
    this.router.navigate(['createOrder1',{userId:id}]);
  }

  buildForm(): FormGroup {
    return this.fb.group({
      byPhone:[null],
      byName:[null]
    });
  }

  getUsers() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.usersDataSource.data = data;
    });
    }


  ngAfterViewInit() {
    this.getUsers();
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

}
