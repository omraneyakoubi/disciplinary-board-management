import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMembreComponent } from './admin-membre.component';

describe('AdminMembreComponent', () => {
  let component: AdminMembreComponent;
  let fixture: ComponentFixture<AdminMembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMembreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
