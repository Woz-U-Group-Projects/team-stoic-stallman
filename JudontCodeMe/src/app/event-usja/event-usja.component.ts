import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-event-usja',
  templateUrl: './event-usja.component.html',
  styleUrls: ['./event-usja.component.scss']
})
export class EventUsjaComponent implements OnInit {

  calendarPlugins = [dayGridPlugin];

  constructor() { }

  ngOnInit() {
  }

}
