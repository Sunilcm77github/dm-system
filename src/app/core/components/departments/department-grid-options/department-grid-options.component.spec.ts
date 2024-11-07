import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentGridOptionsComponent } from './department-grid-options.component';

describe('DepartmentGridOptionsComponent', () => {
  let component: DepartmentGridOptionsComponent;
  let fixture: ComponentFixture<DepartmentGridOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentGridOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentGridOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
