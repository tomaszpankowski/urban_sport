import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsS5Component } from './sports-s5.component';

describe('SportsS5Component', () => {
  let component: SportsS5Component;
  let fixture: ComponentFixture<SportsS5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsS5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsS5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
