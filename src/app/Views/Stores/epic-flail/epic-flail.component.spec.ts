import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicFlailComponent } from './epic-flail.component';

describe('EpicFlailComponent', () => {
  let component: EpicFlailComponent;
  let fixture: ComponentFixture<EpicFlailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpicFlailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicFlailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
