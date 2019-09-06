import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-event-usaj',
  templateUrl: './event-usaj.component.html',
  styleUrls: ['./event-usaj.component.scss']
})
export class EventUsajComponent implements OnInit {

  calendarPlugins = [dayGridPlugin];

  constructor() { }

  ngOnInit() {
  }

}
