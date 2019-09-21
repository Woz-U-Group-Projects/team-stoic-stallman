import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-event-pj',
  templateUrl: './event-pj.component.html',
  styleUrls: ['./event-pj.component.scss']
})
export class EventPjComponent implements OnInit {

  calendarPlugins = [dayGridPlugin];

  constructor() { }

  ngOnInit() {
  }

}
