import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

//Angular Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


//Componentes
import { LoginComponent } from './components/login/login.component';
import { InfoPacientesComponent } from './info-pacientes/info-pacientes.component';
import { ModeloPacienteComponent } from './modelo-paciente/modelo-paciente.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProyectoPoloComponent } from './components/proyecto-polo/proyecto-polo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { TurnosComponent } from './components/turnos/turnos.component';
import { EditPacienteComponent } from './components/edit-paciente/edit-paciente.component';
import { ServicioPacientesService } from './service/servicio-pacientes.service';
import { ConsulaPacientesService } from './service/consulta-pacientes.service';


const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'proyectoPaciente', component:ProyectoPoloComponent},
  {path:'login', component:LoginComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'turnos', component:TurnosComponent},
  {path:'editar/:id', component:EditPacienteComponent},
  //{path:'', component:},
  

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InfoPacientesComponent,
    ModeloPacienteComponent,
    HomeComponent,
    ProyectoPoloComponent,
    ContactoComponent,
    TurnosComponent,
    EditPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [ServicioPacientesService,
  ConsulaPacientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
