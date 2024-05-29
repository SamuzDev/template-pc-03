import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from 'components/footer/footer.component';
import { NavbarComponent } from 'components/navbar/navbar.component';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [RouterLink, FooterComponent, NavbarComponent],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  recipes: Recipe[] = [
    {
      title: "Plato 1",
      description: "Descripción del plato 1",
      imageUrl: "https://images.pexels.com/photos/302457/pexels-photo-302457.jpeg?auto=compress&cs=tinysrgb&w=600",
      time: 30,
      calories: 250,
      comments: 20
    },
    {
      title: "Plato 2",
      description: "Descripción del plato 2",
      imageUrl: "https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg?auto=compress&cs=tinysrgb&w=600",
      time: 45,
      calories: 350,
      comments: 15
    },
    {
      title: "Plato 3",
      description: "Descripción del plato 3",
      imageUrl: "https://images.pexels.com/photos/1579926/pexels-photo-1579926.jpeg?auto=compress&cs=tinysrgb&w=600",
      time: 45,
      calories: 450,
      comments: 35
    },
  ];
}
