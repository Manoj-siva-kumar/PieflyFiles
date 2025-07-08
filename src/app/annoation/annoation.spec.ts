import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Annoation } from './annoation';

describe('Annoation', () => {
  let component: Annoation;
  let fixture: ComponentFixture<Annoation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Annoation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Annoation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
