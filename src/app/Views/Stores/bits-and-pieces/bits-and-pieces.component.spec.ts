import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitsAndPiecesComponent } from './bits-and-pieces.component';

describe('BitsAndPiecesComponent', () => {
  let component: BitsAndPiecesComponent;
  let fixture: ComponentFixture<BitsAndPiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitsAndPiecesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BitsAndPiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
