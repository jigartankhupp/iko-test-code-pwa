import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Angulartics2Module } from 'angulartics2';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import { DetailPageComponent } from './component/detail-page/detail-page.component';
import { SpotItemComponent } from './component/spot-item/spot-item.component';
import { MapComponentComponent } from './component/map-component/map-component.component';
import { CenterListComponent } from './component/center-list/center-list.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    Angulartics2Module,
    HomeRoutingModule,
    SlickCarouselModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAa3G0k7RwdqwGTwp0XuYYZbyrCPoDjR2s'
    })
  ],
  declarations: [HomeComponent, DetailPageComponent, SpotItemComponent, MapComponentComponent, CenterListComponent]
})
export class HomeModule {}
