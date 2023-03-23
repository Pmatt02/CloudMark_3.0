import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDipendenteComponent } from './update-dipendente.component';

describe('UpdateDipendenteComponent', () => {
  let component: UpdateDipendenteComponent;
  let fixture: ComponentFixture<UpdateDipendenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDipendenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDipendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
