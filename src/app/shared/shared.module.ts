import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shell/header/header.component';
import { SpotItemComponent } from '@app/travel/component/spot-item/spot-item.component';
import { LoaderComponent } from './loader/loader.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, NgbModule, RouterModule],
  declarations: [LoaderComponent, HeaderComponent, SpotItemComponent],
  entryComponents: [HeaderComponent, SpotItemComponent],
  exports: [LoaderComponent, HeaderComponent, SpotItemComponent]
})
export class SharedModule {}
