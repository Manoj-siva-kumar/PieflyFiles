import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerEntry } from './tower-entry';

describe('TowerEntry', () => {
  let component: TowerEntry;
  let fixture: ComponentFixture<TowerEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TowerEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TowerEntry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
