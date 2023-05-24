import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing.service';
import { ActivatedRoute } from '@angular/router';

describe('HomeComponent', () => {
  it('mounts with template', () => {
    cy.mount(HomeComponent, {
      imports: [CommonModule, HousingLocationComponent]
    });
  });
});
