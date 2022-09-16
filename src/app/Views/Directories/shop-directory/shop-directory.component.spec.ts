import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDirectoryComponent } from './shop-directory.component';

describe('ShopDirectoryComponent', () => {
  let component: ShopDirectoryComponent;
  let fixture: ComponentFixture<ShopDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopDirectoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
