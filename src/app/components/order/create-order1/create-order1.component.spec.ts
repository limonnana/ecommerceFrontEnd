import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrder1Component } from './create-order1.component';

describe('CreateOrder1Component', () => {
  let component: CreateOrder1Component;
  let fixture: ComponentFixture<CreateOrder1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrder1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrder1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
