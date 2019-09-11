import { Component, OnInit } from '@angular/core';
import { spotList, Spot } from './constant';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {
	public list: Array<Spot> = [];

	constructor() { }

	ngOnInit() {
		this.list = spotList;
	}

}
