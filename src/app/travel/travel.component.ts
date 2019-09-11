import { Component, OnInit } from '@angular/core';
import { spotList, Spot } from './constant';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {
	public list: Array<Spot> = [];

	constructor(private router:Router) {
		this.router.events.subscribe((event)=>{
			if(event instanceof NavigationEnd){
				window.scrollTo(0, 0);
			}
		});
	}

	ngOnInit() {
		this.list = spotList;
	}
}
