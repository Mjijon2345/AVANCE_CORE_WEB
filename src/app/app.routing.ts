import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";


import { AuthGuard } from './services/auth.guard';




import { InicioComponent } from "./components/inicio/inicio.component";
import { CrearTipoActividadComponent } from "./components/crear-tipo-actividad/crear-tipo-actividad.component";
import { CrearActividadComponent } from "./components/crear-actividad/crear-actividad.component";
import { CrearEmpleadoComponent } from "./components/crear-empleado/crear-empleado.component";
import { CrearHuespedComponent } from "./components/crear-huesped/crear-huesped.component"; 
import { FamiliarComponent } from "./components/familiar/familiar.component";
import { EnfermedadComponent } from "./components/enfermedad/enfermedad.component";
import { VisitaComponent } from "./components/visita/visita.component"; 
import { ActividadesComponent } from "./components/actividades/actividades.component"; 




import { HuespedComponent } from "./components/huesped/huesped.component"; 
import { CrearFamiliarComponent } from "./components/crear-familiar/crear-familiar.component"; 
import { CrearEnfermedadComponent } from "./components/crear-enfermedad/crear-enfermedad.component"; 
import { CrearVisitaComponent } from "./components/crear-visita/crear-visita.component";
import { CrearActividadesComponent } from "./components/crear-actividades/crear-actividades.component"; 




import { TipoActividadComponent } from "./components/tipo-actividad/tipo-actividad.component";
import { ErrorComponent } from "./components/error/error.component";
import { ActividadComponent } from "./components/actividad/actividad.component";
import { EmpleadoComponent } from "./components/empleado/empleado.component";
import { LoginComponent } from "./components/login/login.component";


 const appRoutes:Routes= [
   { path: 'creaActividad/:numero?', component: CrearActividadComponent },
   { path: 'creaActividad', component: CrearActividadComponent },
   { path: 'creaTipoActividad/:numero?', component: CrearTipoActividadComponent },
   { path: 'creaTipoActividad', component: CrearTipoActividadComponent },

   { path: 'creaEmpleado/:numero?', component: CrearEmpleadoComponent },
   { path: 'creaEmpleado', component: CrearEmpleadoComponent },
   { path: 'creaHuesped/:numero?', component: CrearHuespedComponent },
   { path: 'creaHuesped', component: CrearHuespedComponent },
   { path: 'creaFamiliar/:numero?', component: CrearFamiliarComponent },
   { path: 'creaFamiliar', component: CrearFamiliarComponent },
   { path: 'creaEnfermedad/:numero?', component: CrearEnfermedadComponent },
   { path: 'creaEnfermedad', component: CrearEnfermedadComponent },
   { path: 'creaVisita/:numero?', component: CrearVisitaComponent },
   { path: 'creaVisita', component: CrearVisitaComponent },
   { path: 'creaActividades/:numero?', component: CrearActividadesComponent },
   { path: 'creaActividades', component: CrearActividadesComponent },
   



   


    


   //NUEVAS

  
    {path: '',component:LoginComponent, pathMatch: 'full'},
    {path: 'inicio',component:InicioComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'huesped', component: HuespedComponent },
    { path: 'familiar', component: FamiliarComponent },
    { path: 'enfermedad', component: EnfermedadComponent },
    { path: 'visita', component: VisitaComponent },
    { path: 'actividades', component: ActividadesComponent },




    {path: 'tipoactividad',component:TipoActividadComponent, canActivate: [AuthGuard]},
    {path: 'tipoactividad/:id',component:TipoActividadComponent},
    {path: 'actividad',component:ActividadComponent, canActivate: [AuthGuard]},
    {path: 'empleado',component:EmpleadoComponent, canActivate: [AuthGuard]},
    {path: '**',component:LoginComponent},
 ];


 export const routing:ModuleWithProviders<Object>= RouterModule.forRoot(appRoutes);