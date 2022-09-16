import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomeDepotComponent } from './gnome-depot.component';

describe('GnomeDepotComponent', () => {
  let component: GnomeDepotComponent;
  let fixture: ComponentFixture<GnomeDepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GnomeDepotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GnomeDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
