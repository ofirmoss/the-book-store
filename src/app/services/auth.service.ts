import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  user;

  constructor(private router: Router) { }

  login(newUser) {
    this.user = newUser;
    this.isLoggedIn = true;
    localStorage.setItem('isLoggedIn', `${this.isLoggedIn}`);
  }

  checkIfUserLoggedIn() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    return this.isLoggedIn;
  }

  logout() {
    this.user = null;
    this.isLoggedIn = false;
    localStorage.setItem('isLoggedIn', `${this.isLoggedIn}`);
    this.router.navigate(['/login']);
  }
}
