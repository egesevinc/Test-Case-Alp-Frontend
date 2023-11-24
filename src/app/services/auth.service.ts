import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:7274';

  constructor(private http: HttpClient) {}

  loginUser(credentials: any): Observable<any> {
   
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, credentials);
  }
}
