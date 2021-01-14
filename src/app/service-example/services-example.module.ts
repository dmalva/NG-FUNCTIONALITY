import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {SingletonService} from './singleton.service';
import { ConsumeSingletonComponent } from './consume-singleton/consume-singleton.component';
import { ConsumeOndemandComponent } from './consume-ondemand/consume-ondemand.component';
import { ConsumeServicesComponent } from './consume-services/consume-services.component';
import { ParametersInjectionComponent } from './parameters-injection/parameters-injection.component'



@NgModule({
  declarations: [
    ConsumeSingletonComponent, 
    ConsumeOndemandComponent,
    ConsumeServicesComponent,
    ParametersInjectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    SingletonService
  ]
})
export class ServicesExampleModule {
  constructor(){
    console.log("LOAD NEW MODULE");
  }  
}
