import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsS4Component } from './sports-s4.component';

describe('SportsS4Component', () => {
  let component: SportsS4Component;
  let fixture: ComponentFixture<SportsS4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsS4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsS4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
