import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommessaComponent } from './add-commessa.component';

describe('AddCommessaComponent', () => {
  let component: AddCommessaComponent;
  let fixture: ComponentFixture<AddCommessaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCommessaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCommessaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
