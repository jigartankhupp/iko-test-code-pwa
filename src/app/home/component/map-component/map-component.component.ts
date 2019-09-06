import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss']
})
export class MapComponentComponent implements OnInit {
  // public lat = 6.428748;
  // public lng = 2.919020;
  public zoom = 12;
  @Input() lat: number;
  @Input() lng: number;
  constructor() {}

  ngOnInit() {}
}
