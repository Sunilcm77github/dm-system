import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRoleBtnComponent } from './new-role-btn.component';

describe('NewRoleBtnComponent', () => {
  let component: NewRoleBtnComponent;
  let fixture: ComponentFixture<NewRoleBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRoleBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRoleBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
