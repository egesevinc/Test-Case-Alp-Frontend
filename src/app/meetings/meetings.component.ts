import { Component } from '@angular/core';
import { MeetingService } from '../services/meeting.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent {
  meetings: any[] = [];

  constructor(private meetingService: MeetingService) {}

  loadMeetings(): void {
    this.meetingService.getMeetings().subscribe(
      response => {
        this.meetings = response;
      },
      error => {
        console.error('Error loading meetings:', error);
      }
    );
  }

  createMeeting(meetingData: any): void {
    this.meetingService.createMeeting(meetingData).subscribe(
      response => {
        // Handle successful meeting creation
        this.loadMeetings(); // Refresh the meetings list
      },
      error => {
        console.error('Error creating meeting:', error);
      }
    );
  }

  // Add updateMeeting and deleteMeeting methods as needed
}
