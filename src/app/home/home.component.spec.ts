import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Angulartics2Module } from 'angulartics2';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { AgmCoreModule } from '@agm/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import { DetailPageComponent } from './component/detail-page/detail-page.component';
import { SpotItemComponent } from './component/spot-item/spot-item.component';
import { MapComponentComponent } from './component/map-component/map-component.component';
import { CenterListComponent } from './component/center-list/center-list.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        Angulartics2Module.forRoot(),
        CoreModule,
        SharedModule,
        HttpClientTestingModule,
        SlickCarouselModule,
        NgxStarRatingModule,
        AgmCoreModule
      ],
      declarations: [
        HomeComponent,
        DetailPageComponent,
        SpotItemComponent,
        MapComponentComponent,
        CenterListComponent
      ],
      providers: [QuoteService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
