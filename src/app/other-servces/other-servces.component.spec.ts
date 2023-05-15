import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherServcesComponent } from './other-servces.component';

describe('OtherServcesComponent', () => {
  let component: OtherServcesComponent;
  let fixture: ComponentFixture<OtherServcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherServcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherServcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
