import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEtabComponent } from './admin-etab.component';

describe('AdminEtabComponent', () => {
  let component: AdminEtabComponent;
  let fixture: ComponentFixture<AdminEtabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEtabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
