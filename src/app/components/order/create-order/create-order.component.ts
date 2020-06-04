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
  ) {}

  ngOnInit(): void {
    //this.newProductFormGroup = this.buildForm();
    this.filterTableFormGroup = this.buildForm();

    // subscribe to changes that occur on the filterTableFormGroup.filter form control
    // when these changes occur, filter the results of the table
    this.filterTableFormGroup.controls['filter'].valueChanges
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

  buildForm(): FormGroup {
    return this.fb.group({
      byPhone:[null]
    });
  }

  ngAfterViewInit() {
     this.userService.getUsers().subscribe(data => {
      this.usersDataSource.data = data;
    });
  }

}
