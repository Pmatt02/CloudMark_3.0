import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommessaUpdateComponent } from './commessa-update.component';

describe('CommessaUpdateComponent', () => {
  let component: CommessaUpdateComponent;
  let fixture: ComponentFixture<CommessaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommessaUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommessaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
