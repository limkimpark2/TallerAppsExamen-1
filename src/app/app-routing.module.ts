import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { EpisodiosComponent } from './episodios/episodios.component';
import { UbicacionesComponent } from './ubicaciones/ubicaciones.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'personajes',
    component: PersonajesComponent
  },
  {
    path: 'episodios',
    component: EpisodiosComponent
  },
  {
    path: 'ubicaciones',
    component: UbicacionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
