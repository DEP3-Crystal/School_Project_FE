import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandatorysubjectsComponent } from './mandatorysubjects.component';

describe('MandatorysubjectsComponent', () => {
  let component: MandatorysubjectsComponent;
  let fixture: ComponentFixture<MandatorysubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandatorysubjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MandatorysubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
