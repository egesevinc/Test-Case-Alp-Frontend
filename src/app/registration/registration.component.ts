import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  userFormData: any = {};

  constructor(private userService: UserService) {}

  registerUser(): void {
    this.userService.registerUser(this.userFormData).subscribe(
      response => {
        // Handle successful registration, e.g., redirect to login page
      },
      error => {
        // Handle registration error
        console.error('Registration failed:', error);
      }
    );
  }
}
