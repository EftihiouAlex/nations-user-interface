import { Component, OnInit } from '@angular/core';
import { CountryStats } from '../models/countryStats';
import { CountriesService } from '../countries.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-country-stats',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './country-stats.component.html',
  styleUrl: './country-stats.component.scss'
})


export class CountryStatsComponent implements OnInit {
  countriesStats: CountryStats[] = [];
  filteredCountries: CountryStats[] = [];
  years: number[] = [];
  yearFrom: number | null = null;
  yearTo: number | null = null;
  startYear = 2000;
  loading = true;
  error = '';

  constructor(private countriesService: CountriesService, private router : Router) {}

  ngOnInit() {
    this.generateYearsDropdown();
    this.getCountryStatsData();
  }  

   getCountryStatsData() {
    this.loading = true;
    this.countriesService.getCountryStats().subscribe({
      next: (data) => {
        this.countriesStats = data;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        window.alert('Something went wrong. Please try again later.');
        this.router.navigate(['']);
      }
    });
  }

  applyFiltersOnYears() {
      if (this.yearFrom == null || this.yearTo == null) {
        this.error = 'Please select both "Year From" and "Year To".';
        return;
      }

     this.countriesService.getFilteredStats(this.yearFrom, this.yearTo).subscribe({
      next: (data) => {
        this.countriesStats = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load filtered data.';
        this.loading = false;
      }
    });
  }

  clearFilter() {
    this.yearFrom = null;
    this.yearTo = null;
    this.getCountryStatsData();
  }

  generateYearsDropdown(){
    const currentYear = new Date().getFullYear();
    for(let year = this.startYear; year <= currentYear; year++) {
      this.years.push(year);
    }
  }
}
