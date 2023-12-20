import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { DatosComponent } from './pages/datos/datos.component';

export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'datos', component: DatosComponent },
    { path: 'contacto', component:AboutComponent}
];