import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // Replace with your backend API URL when available

  constructor(private http: HttpClient) {}

  loginUser(credentials: any): Observable<any> {
    // Simulating a POST request to the backend
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, credentials);
  }
}
