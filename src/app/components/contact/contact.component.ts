import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from 'components/footer/footer.component';
import { NavbarComponent } from 'components/navbar/navbar.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, FooterComponent, NavbarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
