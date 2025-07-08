import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorrectFile } from './incorrect-file';

describe('IncorrectFile', () => {
  let component: IncorrectFile;
  let fixture: ComponentFixture<IncorrectFile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncorrectFile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncorrectFile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
