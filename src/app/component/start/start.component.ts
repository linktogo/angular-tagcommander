import { Component, OnInit } from '@angular/core';
import {TagCommanderService} from 'ngx-tag-commander';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private tcService: TagCommanderService) {
    tcService.setTcVars({
      portlet_name : 'start',
      portlet_Netmind_step_name : 'dev',
      portlet_step_number : 'en',
      insurance_engine : '124',
    });
  }

  ngOnInit() {
  }

}
