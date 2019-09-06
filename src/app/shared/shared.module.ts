import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shell/header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [CommonModule, NgbModule, RouterModule],
  declarations: [LoaderComponent, HeaderComponent],
  entryComponents: [HeaderComponent],
  exports: [LoaderComponent, HeaderComponent]
})
export class SharedModule {}
