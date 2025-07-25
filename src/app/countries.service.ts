import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './models/country'; 
import {Languages} from './models/languages'
import { CountryHighestGdp } from './models/countryHighestGdp';
import { CountryStats } from './models/countryStats';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl = 'http://localhost:8080';
  private countriesUrl = this.apiUrl + '/all-nations';
  private highestGdpUrl = this.apiUrl + '/all-nations-highest-gdp';
  private allStatsUrl = this.apiUrl + '/all-nations-stats';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl);
  }

  getCountryLanguagesById(id: number): Observable<Languages[]> {
    const url = `${this.apiUrl}/${id}/languages`;
    return this.http.get<Languages[]>(url);
  }

  getCountriesHighestGDPRecord() : Observable<CountryHighestGdp[]>{
    return this.http.get<CountryHighestGdp[]>(this.highestGdpUrl);
  }

  getCountryStats() : Observable<CountryStats[]>{
    return this.http.get<CountryStats[]>(this.allStatsUrl);
  }

  getFilteredStats(yearFrom: number, yearTo: number): Observable<CountryStats[]> {
    const url = `${this.apiUrl}/all-nations-filtered-stats?yearFrom=${yearFrom}&yearTo=${yearTo}`;
    return this.http.get<CountryStats[]>(url);
  }

}


