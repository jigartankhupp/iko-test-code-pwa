import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { TravelDetailComponent } from './travel-detail.component'

const routes: Routes = [
	{ path: '',component: TravelDetailComponent, pathMatch:'full', data: { title: extract('Travel') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TravelDetailRoutingModule {}
