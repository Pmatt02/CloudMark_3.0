import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommesseComponent } from './commesse.component';

describe('CommesseComponent', () => {
  let component: CommesseComponent;
  let fixture: ComponentFixture<CommesseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommesseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommesseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
