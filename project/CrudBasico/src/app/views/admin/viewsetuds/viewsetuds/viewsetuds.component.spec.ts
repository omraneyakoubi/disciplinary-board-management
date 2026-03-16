import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsetudsComponent } from './viewsetuds.component';

describe('ViewsetudsComponent', () => {
  let component: ViewsetudsComponent;
  let fixture: ComponentFixture<ViewsetudsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsetudsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsetudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
