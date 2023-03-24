import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientiDetailsComponent } from './clienti-details.component';

describe('ClientiDetailsComponent', () => {
  let component: ClientiDetailsComponent;
  let fixture: ComponentFixture<ClientiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientiDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
