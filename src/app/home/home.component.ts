import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  template: `

 <section class="results">
 <app-housing-location *ngFor = "let housingLocation of housingLocationList"
 [housingLocation] = "housingLocation"></app-housing-location>
 </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
   housingLocationList : HousingLocation[] = [];
   housingService : HousingService = inject (HousingService);
   constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList:HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
    });
   }
}
