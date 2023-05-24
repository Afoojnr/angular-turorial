import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { HousingService } from '../housing.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';

describe('HomeComponent', () => {
  it('mounts with template', () => {
    cy.mount(DetailsComponent, {
      imports: [HomeComponent, RouterLink, RouterOutlet,CommonModule],
      providers: [ActivatedRoute,HousingService],
    });
  });
});
