import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SingleComponent } from 'components/single/single.component';
import { RecipeComponent } from 'components/recipe/recipe.component';
import { ContactComponent } from 'components/contact/contact.component';
import { AboutComponent } from 'components/about/about.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'offer', component: SingleComponent },
    { path: 'recipe', component: RecipeComponent },
    { path: 'single', component: SingleComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
