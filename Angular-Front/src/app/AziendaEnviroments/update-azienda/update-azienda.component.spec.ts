import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAziendaComponent } from './update-azienda.component';

describe('UpdateAziendaComponent', () => {
  let component: UpdateAziendaComponent;
  let fixture: ComponentFixture<UpdateAziendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAziendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAziendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
