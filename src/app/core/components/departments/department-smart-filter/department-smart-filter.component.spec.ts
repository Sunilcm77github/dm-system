import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentSmartFilterComponent } from './department-smart-filter.component';

describe('DepartmentSmartFilterComponent', () => {
  let component: DepartmentSmartFilterComponent;
  let fixture: ComponentFixture<DepartmentSmartFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentSmartFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentSmartFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
