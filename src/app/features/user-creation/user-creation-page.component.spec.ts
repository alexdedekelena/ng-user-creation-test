import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreationPageComponent } from './user-creation-page.component';

describe('UserCreationPageComponent', () => {
  let component: UserCreationPageComponent;
  let fixture: ComponentFixture<UserCreationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCreationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCreationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
