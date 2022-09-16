import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HIstoryComponent } from './history.component';

describe('HIstoryComponent', () => {
  let component: HIstoryComponent;
  let fixture: ComponentFixture<HIstoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HIstoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HIstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
