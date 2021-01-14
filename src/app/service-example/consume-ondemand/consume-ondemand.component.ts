import { Component, OnInit } from '@angular/core';
import { OndemandService } from '../ondemand.service';

@Component({
  selector: 'app-consume-ondemand',
  templateUrl: './consume-ondemand.component.html',
  styleUrls: ['./consume-ondemand.component.css'],
  providers: [OndemandService]
})
export class ConsumeOndemandComponent implements OnInit {

  public name: String;
  
  constructor( 
    private _ondemand : OndemandService
  ) { 
    this.name = 'Informacion de DM';
  }

  ngOnInit() {
  }

  public updateName(){
    this._ondemand.setName(this.name);
  }

  public refreshName(){
    this.name = this._ondemand.getName();
  }

}
