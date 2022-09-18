import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderdarkComponent } from './underdark.component';

describe('UnderdarkComponent', () => {
  let component: UnderdarkComponent;
  let fixture: ComponentFixture<UnderdarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderdarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderdarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
