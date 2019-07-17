import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailsPage } from './weather-details.page';

describe('WeatherDetailsPage', () => {
  let component: WeatherDetailsPage;
  let fixture: ComponentFixture<WeatherDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
