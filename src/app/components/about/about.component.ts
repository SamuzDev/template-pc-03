import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from 'components/footer/footer.component';
import { NavbarComponent } from 'components/navbar/navbar.component';

const MODULES = [
  FooterComponent,
  NavbarComponent
]

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ MODULES ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
