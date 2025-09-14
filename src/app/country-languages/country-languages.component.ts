import { Component, OnInit } from '@angular/core';
import { Languages } from '../models/languages';
import { Router } from '@angular/router';
import { CountriesService } from '../countries.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-languages',
  templateUrl: './country-languages.component.html',
    imports: [CommonModule],
  styleUrls: ['./country-languages.component.scss']
})
export class CountryLanguagesComponent implements OnInit {
  languages: Languages[] = [];
  countryName = "";
  loading = true;

  constructor(private countriesService: CountriesService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
     this.route.paramMap.subscribe(params => {
      let idParam = params.get('id');
      if (idParam) {
        let id =+ idParam;
        this.getCountryLanguages(id);
      }
    });
  }

  getCountryLanguages(id: number) {
    this.loading = true;
    this.countriesService.getCountryLanguagesById(id).subscribe({
      next: (data) => {
        this.languages = data;
        this.countryName = this.languages[0].countryName;
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
