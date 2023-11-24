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
        this.loadMeetings(); 
      },
      error => {
        console.error('Error creating meeting:', error);
      }
    );
  }

  
}
