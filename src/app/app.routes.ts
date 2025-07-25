import { Routes } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryLanguagesComponent } from './country-languages/country-languages.component';
import { CountryHighestGdpComponent } from './country-highest-gdp/country-highest-gdp.component';
import { CountryStatsComponent } from './country-stats/country-stats.component';



export const routes: Routes = [
  { path: 'all-nations', component: CountryListComponent },
  { path: 'all-country-languages/:id', component: CountryLanguagesComponent},
  { path: 'all-nations-highest-gdp', component: CountryHighestGdpComponent},
  { path: 'all-nations-stats', component: CountryStatsComponent}
];
