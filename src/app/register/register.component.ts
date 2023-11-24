// register.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  register() {
    // Add your register logic here
    console.log('Registering with:', this.username, this.email, this.password);
    // You can send the register request to your backend service from here
  }
}
