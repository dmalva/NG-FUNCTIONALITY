import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SingletonService {

  name: String

  constructor() {
    this.name = 'Diego Malvasi - Singleton';
    console.log('LOAD SINGLETON');
  }


  public getName(){
    console.log(this.name);
    return this.name;
  }

  public setName(name: String){
    this.name = name + " - Singleton";
    console.log(this.name);
  }
}
