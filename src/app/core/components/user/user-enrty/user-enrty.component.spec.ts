import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEnrtyComponent } from './user-enrty.component';

describe('UserEnrtyComponent', () => {
  let component: UserEnrtyComponent;
  let fixture: ComponentFixture<UserEnrtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserEnrtyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEnrtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
