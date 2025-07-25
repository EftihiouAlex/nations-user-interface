import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesService } from '../countries.service';
import { Router, RouterModule } from '@angular/router';
import { CountryHighestGdp } from '../models/countryHighestGdp';

@Component({
  selector: 'app-country-highest-gdp',
  imports: [CommonModule, RouterModule],
  templateUrl: './country-highest-gdp.component.html',
  styleUrl: './country-highest-gdp.component.scss'
})
export class CountryHighestGdpComponent implements OnInit {
  countriesHighestGdp: CountryHighestGdp[] = [];
  loading = true;

  constructor(private countriesService: CountriesService, private router : Router) {}

  ngOnInit() {
    this.getHighestGdpPerCountry();
  }  

   getHighestGdpPerCountry() {
    this.loading = true;
    this.countriesService.getCountriesHighestGDPRecord().subscribe({
      next: (data) => {
        this.countriesHighestGdp = data;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        window.alert('Something went wrong. Please try again later.');
        this.router.navigate(['']);
      }
    });
  }

}
