import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideTheBachComponent } from './outside-the-bach.component';

describe('OutsideTheBachComponent', () => {
  let component: OutsideTheBachComponent;
  let fixture: ComponentFixture<OutsideTheBachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutsideTheBachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutsideTheBachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
