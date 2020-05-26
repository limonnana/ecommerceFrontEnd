import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidationService } from 'src/app/services/validation.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  newCategoryFormGroup: FormGroup = null;
  error: string = '';
  category: Category = new Category();
  title: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,
    private validationService: ValidationService
  ) { }

  ngOnInit() {
    this.newCategoryFormGroup = this.buildForm();
    let categoryId = this.route.snapshot.params['categoryId'];
    console.log('categoryId: ' + categoryId);
    if(categoryId){
      this.title = 'Edit';
     
      this.categoryService.getCategoryById(categoryId)
        .subscribe( data => {
          this.category.categoryId = categoryId;
          this.category.name = data.name;
          this.newCategoryFormGroup.setValue(this.category);
        });
    }else{
      this.title = 'Create';
    }

    
  }
  
  buildForm(): FormGroup {
    return this.fb.group({
      categoryId:[null],
      name: [null, Validators.required]
    });
  }

  addCategory() {
    const categoryFromForm: Category = this.newCategoryFormGroup.value;
    this.error = this.validationService.validateNewCategoryForm(categoryFromForm);
    if (this.error != null && this.error.length>2) {
      console.log('error from form: ' + this.error);
      return;
    } else {
      this.categoryService.save(categoryFromForm).subscribe(data => {
        this.router.navigate(['categories']);
       console.log('the answer from server is: ' + data.name);
     });
    }
  }

  cancel(){
    this.router.navigate(['categories']);
  }



}
