import { Component, OnInit } from '@angular/core';
import { spotList, Spot, Centers } from '../../constant';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  public relatedSpot: Array<Spot> = [];
  private spotId: number;
  public spot: Spot;
  public centers: Array<Centers> = [];
  public sliderConfig = { slidesToShow: 1, slidesToScroll: 1, arrows: true, fade: true };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.spotId = +this.route.snapshot.paramMap.get('id');
    const index = spotList.findIndex(x => {
      return x.id == this.spotId;
    });
    if (index > -1) {
      this.spot = spotList[index];
      const tmpList = [...spotList];
      tmpList.splice(index, 1);
      this.relatedSpot = tmpList;
      this.centers = this.spot.centers;
    }
  }
}
