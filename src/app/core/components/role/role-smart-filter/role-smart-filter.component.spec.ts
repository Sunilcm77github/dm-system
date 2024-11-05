import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleSmartFilterComponent } from './role-smart-filter.component';

describe('RoleSmartFilterComponent', () => {
  let component: RoleSmartFilterComponent;
  let fixture: ComponentFixture<RoleSmartFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleSmartFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleSmartFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
