import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSmartFilterComponent } from './user-smart-filter.component';

describe('UserSmartFilterComponent', () => {
  let component: UserSmartFilterComponent;
  let fixture: ComponentFixture<UserSmartFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSmartFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSmartFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
