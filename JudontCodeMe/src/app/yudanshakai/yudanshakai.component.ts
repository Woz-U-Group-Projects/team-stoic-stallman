import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-yudanshakai',
  templateUrl: './yudanshakai.component.html',
  styleUrls: ['./yudanshakai.component.scss']
})
export class YudanshakaiComponent implements OnInit {
  
  constructor() {
  }

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
