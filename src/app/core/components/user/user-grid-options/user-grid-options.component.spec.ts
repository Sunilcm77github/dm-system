import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGridOptionsComponent } from './user-grid-options.component';

describe('UserGridOptionsComponent', () => {
  let component: UserGridOptionsComponent;
  let fixture: ComponentFixture<UserGridOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserGridOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGridOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
