import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { TravelComponent } from './travel.component';
import { Shell } from '@app/shell/shell.service';
import { DetailPageComponent } from './component/detail-page/detail-page.component'

const routes: Routes = [
	{ path: '',component: TravelComponent, pathMatch:'full', data: { title: extract('Travel') } },
	{ 
		path: ':id/detail',
		loadChildren: './travel-detail/travel-detail.module#TravelDetailModule',
		pathMatch:'full', 
		data: { title: extract('Travel') }
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TravelRoutingModule {}
