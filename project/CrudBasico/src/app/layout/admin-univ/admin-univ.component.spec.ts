import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUnivComponent } from './admin-univ.component';

describe('AdminUnivComponent', () => {
  let component: AdminUnivComponent;
  let fixture: ComponentFixture<AdminUnivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUnivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUnivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
