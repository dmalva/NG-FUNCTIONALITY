import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'boostrap-tree', //Idica el nombre del selector de angular para HTML
  templateUrl: './boostrapTree.html', //HTML que corresponde al ts 
})

export class BoostrapTreeComponent{
	public title : string;
	public isDisplayTree: boolean;

	constructor(){
		this.title = "Boostrap Tree";
		this.isDisplayTree = false;
	}

	public displayTree(display){
		this.isDisplayTree = display;
		console.log(display);
	}

	changed(){
		this.isDisplayTree = !this.isDisplayTree;
	}
}