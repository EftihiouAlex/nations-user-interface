import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesService } from '../countries.service';
import { Country } from '../models/country'; 
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-country-list',
  standalone : true,
  imports: [CommonModule, RouterModule],
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {  
  countries: Country[] = [];
  loading = true;

  constructor(private countriesService: CountriesService, private router : Router) {}

  ngOnInit() {
    this.getAllCountriesData();
  }

  getAllCountriesData(){
    this.countriesService.getCountries().subscribe({   
      next: data => {
        this.countries = data;
        this.loading = false;
      },
      error: err => {
        this.loading = false;
        window.alert('Something went wrong. Please try again later.');
        this.router.navigate(['']);
      }
    });
  }

  goToLanguages(id: number, name: string) {
    this.router.navigateByUrl(`/all-country-languages/${id}`, { state: { countryName: name } });
  }
}
