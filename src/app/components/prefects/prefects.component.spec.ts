import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefectsComponent } from './prefects.component';

describe('PrefectsComponent', () => {
  let component: PrefectsComponent;
  let fixture: ComponentFixture<PrefectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrefectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
