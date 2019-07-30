import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [ 
	{ path: 'login', loadChildren: './modules/login/login.module#LoginModule' },
	{
		path: 'register',
		loadChildren: './modules/register/register.module#RegisterModule',
	},
	{
		path: 'insta', loadChildren: './modules/insta/insta.module#InstaModule'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
