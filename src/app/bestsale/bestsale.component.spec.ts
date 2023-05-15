import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsaleComponent } from './bestsale.component';

describe('BestsaleComponent', () => {
  let component: BestsaleComponent;
  let fixture: ComponentFixture<BestsaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestsaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
