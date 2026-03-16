import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsanctionComponent } from './addsanction.component';

describe('AddsanctionComponent', () => {
  let component: AddsanctionComponent;
  let fixture: ComponentFixture<AddsanctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsanctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsanctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
