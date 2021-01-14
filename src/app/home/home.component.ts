import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

/*
import { UserService } from '../services/user.service';
import { GLOBAL } from '../services/global';

import { User } from '../models/user';
//import { Artist } from '../models/artist';
*/

@Component({
  selector: 'home', //Idica el nombre del selector de angular para HTML
  templateUrl: './home.html', //HTML que corresponde al ts 
})

export class HomeComponent{
	public title : string;

	constructor(){
		this.title = "Listado de ejemplos";
	}
}