import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'controles', //Idica el nombre del selector de angular para HTML
  templateUrl: './controles.html', //HTML que corresponde al ts 
})

export class ControlesComponent{
	public title : string;

	constructor(){
		this.title = "Controles de boostrap";
	}
}