import { Injectable } from '@angular/core';

@Injectable()
export class OndemandService {
  name : String;

  constructor() { 
    this.name = 'Diego Malvasi - Ondemand'
  }

  public getName(){
    return this.name;
  }

  public setName(name: String){
    this.name = name + " - Ondemand";
  }

}
