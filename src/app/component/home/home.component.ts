import { Component, OnInit } from '@angular/core';
import {TagCommanderService} from 'ngx-tag-commander';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private tcService: TagCommanderService) {
    tcService.setTcVars({
      portlet_name : 'home',
      portlet_Netmind_step_name : 'dev',
      portlet_step_number : 'en',
      insurance_engine : '124',
    });
  }

  ngOnInit() {
  }

}
