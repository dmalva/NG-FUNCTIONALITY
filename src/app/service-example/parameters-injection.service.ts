import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParametersInjectionService {

  constructor(
    @Inject('paramValue') private paramValue: string
  ) {}

  public getName(){
    return this.paramValue;
  }
}
