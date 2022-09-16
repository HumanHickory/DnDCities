import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeOfTheBeholderComponent } from './eye-of-the-beholder.component';

describe('EyeOfTheBeholderComponent', () => {
  let component: EyeOfTheBeholderComponent;
  let fixture: ComponentFixture<EyeOfTheBeholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EyeOfTheBeholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EyeOfTheBeholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
