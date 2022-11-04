import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmorcrombieAndFitchComponent } from './armorcrombie-and-fitch.component';

describe('ArmorcrombieAndFitchComponent', () => {
  let component: ArmorcrombieAndFitchComponent;
  let fixture: ComponentFixture<ArmorcrombieAndFitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmorcrombieAndFitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmorcrombieAndFitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
