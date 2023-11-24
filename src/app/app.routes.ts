import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MeetingsComponent } from './meetings/meetings.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'meetings', component: MeetingsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
