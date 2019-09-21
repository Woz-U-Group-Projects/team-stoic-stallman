import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-event-ijf',
  templateUrl: './event-ijf.component.html',
  styleUrls: ['./event-ijf.component.scss']
})
export class EventIjfComponent implements OnInit {

  calendarPlugins = [dayGridPlugin];

  constructor() { }

  ngOnInit() {
  }

}
