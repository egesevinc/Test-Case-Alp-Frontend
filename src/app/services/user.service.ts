import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'your_backend_api_url'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    const url = `${this.apiUrl}/register`;
    return this.http.post(url, userData);
  }
}
