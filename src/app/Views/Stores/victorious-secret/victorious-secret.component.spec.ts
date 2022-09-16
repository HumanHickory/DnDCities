import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictoriousSecretComponent } from './victorious-secret.component';

describe('VictoriousSecretComponent', () => {
  let component: VictoriousSecretComponent;
  let fixture: ComponentFixture<VictoriousSecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VictoriousSecretComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VictoriousSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
