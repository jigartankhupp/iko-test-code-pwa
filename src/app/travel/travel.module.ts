import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelComponent } from './travel.component';
import { TravelRoutingModule } from './travel-routing.module'
import { SharedModule } from '@app/shared';
import { Angulartics2Module } from 'angulartics2';

@NgModule({
  declarations: [TravelComponent],
  imports: [
    CommonModule,
    TravelRoutingModule,
    SharedModule,
    Angulartics2Module
  ]
})
export class TravelModule { }
