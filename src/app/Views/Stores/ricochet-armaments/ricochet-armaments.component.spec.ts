import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicochetArmamentsComponent } from './ricochet-armaments.component';

describe('RicochetArmamentsComponent', () => {
  let component: RicochetArmamentsComponent;
  let fixture: ComponentFixture<RicochetArmamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RicochetArmamentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RicochetArmamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
