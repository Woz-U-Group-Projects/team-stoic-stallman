import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-event-usjf',
  templateUrl: './event-usjf.component.html',
  styleUrls: ['./event-usjf.component.scss']
})
export class EventUsjfComponent implements OnInit {

  calendarPlugins = [dayGridPlugin];

  constructor() { }

  ngOnInit() {
  }

}
