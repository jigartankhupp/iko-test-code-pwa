import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { spotList, Spot } from './constant';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public list: Array<Spot> = [];

  constructor(private router: Router) {
    this.list = spotList;
    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    window.addEventListener("scroll",()=>{
      console.log("dasd");
    })
    document.body.addEventListener("scroll",()=>{
      console.log("scorl");
    })
  }

  ngOnInit() {}
}
