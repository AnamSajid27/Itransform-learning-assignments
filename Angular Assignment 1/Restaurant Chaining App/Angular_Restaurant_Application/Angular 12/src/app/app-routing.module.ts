import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './menu/menu.component';
import { OrderComponent } from './menu/Restaurant/order.component';

const routes: Routes = [
	{ path: '', redirectTo: 'order', pathMatch: 'full' },
	{ path: 'orders', component: OrdersComponent },
	{
		path: 'order',
		children: [
			{ path: '', component: OrderComponent },
			{ path: 'edit/:id', component: OrderComponent } // /order/edit/5
		]
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
