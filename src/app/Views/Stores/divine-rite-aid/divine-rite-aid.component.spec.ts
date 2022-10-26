import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivineRiteAidComponent } from './divine-rite-aid.component';

describe('DivineRiteAidComponent', () => {
  let component: DivineRiteAidComponent;
  let fixture: ComponentFixture<DivineRiteAidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivineRiteAidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivineRiteAidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
