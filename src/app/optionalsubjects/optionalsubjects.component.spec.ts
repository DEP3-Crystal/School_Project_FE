import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalsubjectsComponent } from './optionalsubjects.component';

describe('OptionalsubjectsComponent', () => {
  let component: OptionalsubjectsComponent;
  let fixture: ComponentFixture<OptionalsubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionalsubjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionalsubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
