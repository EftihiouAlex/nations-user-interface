import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryHighestGdpComponent } from './country-highest-gdp.component';

describe('CoutryHighestGdpComponent', () => {
  let component: CountryHighestGdpComponent;
  let fixture: ComponentFixture<CountryHighestGdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryHighestGdpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryHighestGdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
