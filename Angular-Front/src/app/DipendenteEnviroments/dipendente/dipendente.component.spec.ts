import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipendenteComponent } from './dipendente.component';

describe('DipendenteComponent', () => {
  let component: DipendenteComponent;
  let fixture: ComponentFixture<DipendenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DipendenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DipendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
