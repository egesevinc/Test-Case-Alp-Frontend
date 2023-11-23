import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginCredentials: any = {};

  constructor(private authService: AuthService) {}

  loginUser(): void {
    this.authService.loginUser(this.loginCredentials).subscribe(
      response => {
        // Handle successful login
      },
      error => {
        // Handle login error
        console.error('Login failed:', error);
      }
    );
  }
}
