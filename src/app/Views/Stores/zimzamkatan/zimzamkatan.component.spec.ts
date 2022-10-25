import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZimzamkatanComponent } from './zimzamkatan.component';

describe('ZimzamkatanComponent', () => {
  let component: ZimzamkatanComponent;
  let fixture: ComponentFixture<ZimzamkatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZimzamkatanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZimzamkatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
