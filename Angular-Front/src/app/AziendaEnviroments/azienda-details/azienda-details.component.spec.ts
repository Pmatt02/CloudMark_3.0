import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AziendaDetailsComponent } from './azienda-details.component';

describe('AziendaDetailsComponent', () => {
  let component: AziendaDetailsComponent;
  let fixture: ComponentFixture<AziendaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AziendaDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AziendaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
