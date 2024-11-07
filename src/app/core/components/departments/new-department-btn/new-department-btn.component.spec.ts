import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDepartmentBtnComponent } from './new-department-btn.component';

describe('NewDepartmentBtnComponent', () => {
  let component: NewDepartmentBtnComponent;
  let fixture: ComponentFixture<NewDepartmentBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewDepartmentBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDepartmentBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
