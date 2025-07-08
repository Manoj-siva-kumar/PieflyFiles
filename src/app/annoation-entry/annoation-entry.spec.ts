import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoationEntry } from './annoation-entry';

describe('AnnoationEntry', () => {
  let component: AnnoationEntry;
  let fixture: ComponentFixture<AnnoationEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnoationEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnoationEntry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
