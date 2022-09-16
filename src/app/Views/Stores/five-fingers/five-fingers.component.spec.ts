import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveFingersComponent } from './five-fingers.component';

describe('FiveFingersComponent', () => {
  let component: FiveFingersComponent;
  let fixture: ComponentFixture<FiveFingersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveFingersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiveFingersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
