import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing,appRoutingProviders } from './app.routing';

import { ServicesExampleModule } from './service-example/services-example.module';
import { DataTypeModule } from './data-type/data-type.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ControlesComponent } from './controles/controles.component';
import { BoostrapTreeComponent } from './controles/boostrapTree.component';
import { FuntionalityComponent } from './funtionality/funtionality.component';
import { MasterBComponent } from './component-temp/master-b/master-b.component';
import { MasterBAComponent } from './component-temp/master-b-a/master-b-a.component';
import { MasterBABComponent } from './component-temp/master-b-a-b/master-b-a-b.component';

//import {SingletonService} from './service-example/singleton.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ControlesComponent,
    BoostrapTreeComponent,
    FuntionalityComponent,
    MasterBComponent,
    MasterBAComponent,
    MasterBABComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ServicesExampleModule,
    DataTypeModule,
    routing,
    
  ],
  providers: [
    appRoutingProviders,
    //SingletonService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
