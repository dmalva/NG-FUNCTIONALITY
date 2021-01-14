import { Component, OnInit } from '@angular/core';
import { SingletonService } from '../singleton.service';

@Component({
  selector: 'app-consume-singleton',
  templateUrl: './consume-singleton.component.html',
  styleUrls: ['./consume-singleton.component.css'],
  providers: []
})
export class ConsumeSingletonComponent implements OnInit {

  public name: String;
  
  constructor( 
    private _singleton : SingletonService
  ) { 
    this.name = 'Informacion de DM';
  }

  ngOnInit() {
  }

  public updateName(){
    this._singleton.setName(this.name);
  }

  public refreshName(){
    this.name = this._singleton.getName();
  }

}
