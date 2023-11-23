import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  private apiUrl = 'your_backend_api_url'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  getMeetings(): Observable<any> {
    const url = `${this.apiUrl}/meetings`;
    return this.http.get(url);
  }

  createMeeting(meetingData: any): Observable<any> {
    const url = `${this.apiUrl}/create-meeting`;
    return this.http.post(url, meetingData);
  }

  // Add updateMeeting and deleteMeeting methods as needed
}
