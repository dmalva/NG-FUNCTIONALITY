import { Component, OnInit } from '@angular/core';
import { ConsumeSingletonComponent } from '../consume-singleton/consume-singleton.component';
import { ConsumeOndemandComponent } from '../consume-ondemand/consume-ondemand.component';


@Component({
  selector: 'app-consume-services',
  templateUrl: './consume-services.component.html',
  styleUrls: ['./consume-services.component.css']
})
export class ConsumeServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
