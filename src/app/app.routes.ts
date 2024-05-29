import { Routes } from '@angular/router';
import { InicioComponent } from './features/componentes/inicio/inicio.component';
import { ValidarPorAnhoComponent } from './features/componentes/validar-por-anho/validar-por-anho.component';
import { ValidarPorFechaComponent } from './features/componentes/validar-por-fecha/validar-por-fecha.component';

export const routes: Routes = [
    { path: "inicio", component: InicioComponent },
    { path: "validarNano", component: ValidarPorAnhoComponent },
    { path: "esFestivo", component: ValidarPorFechaComponent },
];
