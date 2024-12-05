
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CrearTipoActividadComponent } from './components/crear-tipo-actividad/crear-tipo-actividad.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { PieComponent } from './components/pie/pie.component';
import { TipoActividadComponent } from './components/tipo-actividad/tipo-actividad.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ErrorComponent } from './components/error/error.component';
import { ActividadComponent } from './components/actividad/actividad.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { TypeComponent } from './components/type/type.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CrearActividadComponent } from './components/crear-actividad/crear-actividad.component';
import { CrearEmpleadoComponent } from './components/crear-empleado/crear-empleado.component';
import { PersonComponent } from './components/person/person.component';
import { LoginComponent } from './components/login/login.component';
import { HuespedComponent } from './components/huesped/huesped.component';
import { FamiliarComponent } from './components/familiar/familiar.component';
import { EnfermedadComponent } from './components/enfermedad/enfermedad.component';
import { VisitaComponent } from './components/visita/visita.component';
import { CrearHuespedComponent } from './components/crear-huesped/crear-huesped.component';
import { CrearFamiliarComponent } from './components/crear-familiar/crear-familiar.component';
import { CrearEnfermedadComponent } from './components/crear-enfermedad/crear-enfermedad.component';
import { CrearVisitaComponent } from './components/crear-visita/crear-visita.component';
import { CrearActividadesComponent } from './components/crear-actividades/crear-actividades.component';
import { ActividadesComponent } from './components/actividades/actividades.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    CabeceraComponent,
    NavegacionComponent,
    PieComponent,
    TipoActividadComponent,
    ErrorComponent,
    ActividadComponent,
    EmpleadoComponent,
    TypeComponent,
    CrearActividadComponent,
    CrearTipoActividadComponent,
    CrearEmpleadoComponent,
    PersonComponent,
    LoginComponent,
    HuespedComponent,
    FamiliarComponent,
    EnfermedadComponent,
    VisitaComponent,
    CrearHuespedComponent,
    CrearFamiliarComponent,
    CrearEnfermedadComponent,
    CrearVisitaComponent,
    CrearActividadesComponent,
    ActividadesComponent,

  ],

  imports: [
    NgxPaginationModule,
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
