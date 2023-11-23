import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MeetingsComponent } from './meetings/meetings.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'meetings', component: MeetingsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
