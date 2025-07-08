import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Piefly } from './piefly';

describe('Piefly', () => {
  let component: Piefly;
  let fixture: ComponentFixture<Piefly>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Piefly]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Piefly);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
