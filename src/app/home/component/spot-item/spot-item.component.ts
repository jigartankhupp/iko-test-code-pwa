import { Component, OnInit, Input } from '@angular/core';
import { Spot } from '../../constant';

@Component({
  selector: 'app-spot-item',
  templateUrl: './spot-item.component.html',
  styleUrls: ['./spot-item.component.scss']
})
export class SpotItemComponent implements OnInit {
  @Input() spot: Spot;
  @Input() isFromHome: boolean = false;
  constructor() {}

  ngOnInit() {}
}
