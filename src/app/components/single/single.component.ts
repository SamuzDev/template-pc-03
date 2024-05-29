import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from 'components/footer/footer.component';
import { NavbarComponent } from 'components/navbar/navbar.component';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [RouterLink, FooterComponent, NavbarComponent],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {

}
