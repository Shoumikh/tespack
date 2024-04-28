import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { users } from './usersData';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isValid: boolean = false;
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    // Call your backend API to authenticate the user
    // Example:

    users.map((user) => {
      if (user.email === email && user.password === password) {
        this.isValid = true;
        localStorage.setItem('isValid', 'yes');
      }
    });

    if (this.isValid === true) {
      return { email: email, password: password };
    } else {
      localStorage.setItem('isValid', 'no');
      return {};
    }

    // return this.http.post<any>('/api/login', { email, password });
  }

  logout() {
    localStorage.setItem('isValid', 'no');
    this.router.navigate(['/login']);
    // Implement logout functionality if needed
  }

  isAuthenticated(): boolean {
    // Implement logic to check if user is authenticated
    if (localStorage.getItem('isValid') === 'yes') {
      return true;
    }
    return false; // For demonstration, always return true
  }
}
