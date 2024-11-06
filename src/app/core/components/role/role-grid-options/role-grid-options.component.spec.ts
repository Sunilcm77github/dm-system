import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleGridOptionsComponent } from './role-grid-options.component';

describe('RoleGridOptionsComponent', () => {
  let component: RoleGridOptionsComponent;
  let fixture: ComponentFixture<RoleGridOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleGridOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleGridOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
