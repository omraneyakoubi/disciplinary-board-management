import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiermbrComponent } from './modifiermbr.component';

describe('ModifiermbrComponent', () => {
  let component: ModifiermbrComponent;
  let fixture: ComponentFixture<ModifiermbrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiermbrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifiermbrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
