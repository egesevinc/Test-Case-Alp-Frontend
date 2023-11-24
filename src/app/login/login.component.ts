// login.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = ''; // Initialize with an empty string
  password: string = '';

  constructor() {
    // constructor logic
  }

  onSubmit(event: Event): void {
    // handle form submission logic here
  }
}
