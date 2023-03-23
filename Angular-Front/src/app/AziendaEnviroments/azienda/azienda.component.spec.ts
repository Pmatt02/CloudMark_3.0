import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AziendaComponent } from './azienda.component';

describe('AziendaComponent', () => {
  let component: AziendaComponent;
  let fixture: ComponentFixture<AziendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AziendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AziendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
