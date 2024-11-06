import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserBtnComponent } from './new-user-btn.component';

describe('NewUserBtnComponent', () => {
  let component: NewUserBtnComponent;
  let fixture: ComponentFixture<NewUserBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewUserBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewUserBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
