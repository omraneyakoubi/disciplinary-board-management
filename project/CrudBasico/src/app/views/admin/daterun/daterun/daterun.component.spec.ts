import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaterunComponent } from './daterun.component';

describe('DaterunComponent', () => {
  let component: DaterunComponent;
  let fixture: ComponentFixture<DaterunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaterunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaterunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
