import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';



import { HomeComponent } from './home/home.component';

import { ControlesComponent } from './controles/controles.component';
import { BoostrapTreeComponent } from './controles/boostrapTree.component';
import { FuntionalityComponent } from './funtionality/funtionality.component';
import { ConsumeServicesComponent } from './service-example/consume-services/consume-services.component';
import { ParametersInjectionComponent } from './service-example/parameters-injection/parameters-injection.component';
import { DataViewComponent } from './data-type/data-view/data-view.component';

const appRoutes : Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'controls', component: ControlesComponent},
	{path: 'boostrap-tree', component: BoostrapTreeComponent},
	{path: 'functionality', component: FuntionalityComponent },
	{path: 'services-example', component: ConsumeServicesComponent },
	{path: 'services-inject-param', component: ParametersInjectionComponent },
	{path: 'data-type-view', component: DataViewComponent },
	
	/*
	{path: 'artists/:page', component: ArtistListComponent}, //recive el parametro page
	{path: 'create-artist', component: ArtistAddComponent}, 
	{path: 'editar-artista/:id', component: ArtistEditComponent}, //recive el parametro id Artista
	{path: 'artista/:id', component: ArtistDetailComponent}, //recive el parametro id Artista
	{path: 'crear-album/:artist', component: AlbumAddComponent}, //recive el parametro page
	{path: 'editar-album/:id', component: AlbumEditComponent}, //recive el parametro page
	{path: 'album/:id', component: AlbumDetailComponent}, //recive el parametro page
	{path: 'crear-tema/:album', component: SongAddComponent}, //recive el parametro page
	{path: 'editar-tema/:id', component: SongEditComponent}, //recive el parametro page
	*/
	{path: '**', component: HomeComponent} //Cuando cargo una ruta no configurada
];

export const appRoutingProviders:any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
