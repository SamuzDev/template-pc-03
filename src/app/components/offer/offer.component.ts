import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from 'components/footer/footer.component';
import { NavbarComponent } from 'components/navbar/navbar.component';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [RouterLink, FooterComponent, NavbarComponent],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css'
})
export class OfferComponent {

}
