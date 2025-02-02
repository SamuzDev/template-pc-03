import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}