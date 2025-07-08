import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procees } from './procees';

describe('Procees', () => {
  let component: Procees;
  let fixture: ComponentFixture<Procees>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Procees]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Procees);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
