import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title = 'Look jQuery Animation working in action!';

  public ngOnInit() {
    $(document).ready(function(){
      $("button").click(function(){
          var div = $(".anim");  
          div.animate({left: '100px'}, "slow");
          div.animate({fontSize: '5em'}, "slow");
      });
  });
  }

}
