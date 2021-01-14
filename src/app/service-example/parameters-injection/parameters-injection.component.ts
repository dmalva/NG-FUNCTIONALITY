import { Component, OnInit } from '@angular/core';
import { ParametersInjectionService } from '../parameters-injection.service'

@Component({
  selector: 'app-parameters-injection',
  templateUrl: './parameters-injection.component.html',
  styleUrls: ['./parameters-injection.component.css'],
  providers: [ ParametersInjectionService, {provide: 'paramValue', useValue: 'Paso mi nombre como parametro: Diego Malvasi'}]
})
export class ParametersInjectionComponent implements OnInit {

  value_param: String = 'Diego';

  constructor(
    private _parameterService: ParametersInjectionService
  ) { 
    this.value_param = _parameterService.getName();
    console.log(this.value_param);

  }

  ngOnInit() {
  }

}
