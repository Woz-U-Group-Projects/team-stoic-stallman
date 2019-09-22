import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import * as $ from 'jquery';

@Component({
  selector: 'app-event-pj',
  templateUrl: './event-pj.component.html',
  styleUrls: ['./event-pj.component.scss']
})
export class EventPjComponent implements OnInit {

  calendarPlugins = [dayGridPlugin];

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $("#btnWaiver").click(function(){
        $(".waiver").css("visibility", "visible");
      });
    });

    $(document).ready(function(){
      $("#btnClose").click(function(){
        $(".waiver").css("visibility", "hidden");
      });
    });

    $(document).ready(function(){
      $("#btnCode").click(function(){
        $(".code").css("visibility", "visible");
      });
    });

    $(document).ready(function(){
      $("#btnCloseCode").click(function(){
        $(".code").css("visibility", "hidden");
      });
    });

    $(document).ready(function(){
      $("#btnSubmit").click(function(){
        $(".acknowledgement").css("visibility", "visible");
      });
    });

    $(document).ready(function(){
      $("#btnNo").click(function(){
        $(".acknowledgement").css("visibility", "hidden");
      });
    });

    $(document).ready(function(){
      $("#btnYes").click(function(){
        $(".acknowledgement").css("visibility", "hidden");
      });
    });
  }

}
