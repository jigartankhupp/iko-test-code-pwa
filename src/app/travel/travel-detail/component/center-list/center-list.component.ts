import { Component, OnInit, Input } from '@angular/core';
import { Centers } from '../../constant';
@Component({
  selector: 'app-center-list',
  templateUrl: './center-list.component.html',
  styleUrls: ['./center-list.component.scss']
})
export class CenterListComponent implements OnInit {
  @Input() centers: Array<Centers> = [];
  TwoslidesCabareteConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    centerPadding: 40,
    responsive: [{ breakpoint: 400, settings: { slidesToShow: 1, slidesToScroll: 1, fade: true } }]
  };
  
  constructor() {}

  ngOnInit() {}
}
