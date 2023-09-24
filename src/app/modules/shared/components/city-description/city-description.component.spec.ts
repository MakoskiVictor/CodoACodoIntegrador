import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDescriptionComponent } from './city-description.component';

describe('CityDescriptionComponent', () => {
  let component: CityDescriptionComponent;
  let fixture: ComponentFixture<CityDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityDescriptionComponent]
    });
    fixture = TestBed.createComponent(CityDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
