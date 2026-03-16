import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantsConvComponent } from './etudiants-conv.component';

describe('EtudiantsConvComponent', () => {
  let component: EtudiantsConvComponent;
  let fixture: ComponentFixture<EtudiantsConvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantsConvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantsConvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
