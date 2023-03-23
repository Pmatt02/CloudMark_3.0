import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDipendenteComponent } from './add-dipendente.component';

describe('AddDipendenteComponent', () => {
  let component: AddDipendenteComponent;
  let fixture: ComponentFixture<AddDipendenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDipendenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDipendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
