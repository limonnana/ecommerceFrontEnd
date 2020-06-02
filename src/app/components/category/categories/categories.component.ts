import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import { GenericModalComponent } from '../../modal/generic-modal/generic-modal.component';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  private dataSource = new MatTableDataSource<Category>([]);
  

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private dialog: MatDialog
  ){}

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  get columns(): string[] {
    // return a string array of the columns in the table
    // the order of these values will be the order your columns show up in
    return ['name', 'edit', 'delete'];
  }

  onEditClick(categoryId){
    console.log('edit id: ' + categoryId);
    this.router.navigate(['editCategory',{categoryId:categoryId}]);
  }

  refresh() {
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.dataSource.data = data;
    });
  }


  openDialog(categoryId): void {
    const dialogRef = this.dialog.open(GenericModalComponent, {
      width: '300px',
      data: {
        id: categoryId,
        type: 'category'
      }
    });
  
  dialogRef.afterClosed().subscribe(
    data => {
      if(data){
        this.yesDelete(data.id);
      }
      }
  );   
  }

  closeMe(): void {
    this.dialog.closeAll();
  }

  yesDelete(categoryId){
    this.categoryService.delete(categoryId).subscribe(data => {
      console.log('Data: ' + data.message);
      if(data.message === 200){
        this.deleteFromTable(categoryId);             
      }
    });
  }

  

  deleteFromTable(categoryId: string){
    this.dataSource.data.splice(+categoryId,1);
    this.refresh();
  }

}
