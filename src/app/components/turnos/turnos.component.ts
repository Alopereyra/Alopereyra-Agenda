import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/pacientes.model';
import { ConsulaPacientesService } from 'src/app/service/consulta-pacientes.service';
import { ServicioPacientesService } from 'src/app/service/servicio-pacientes.service';


@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})


export class TurnosComponent implements OnInit{

  constructor(private router:Router, private miServicio:ServicioPacientesService, private pacienteService:ConsulaPacientesService) {

    

  }

  ngOnInit(): void {
      this.pacientes=this.pacienteService.pacientes
  }
  
  pacientes:Paciente[]=[]

  agregarPaciente(){
    let miPaciente= new Paciente(
      this.cuadroNombre, this.cuadroApellido, this.cuadroObraSocial, this.cuadroTurno, this.cuadroHorario);
    
      this.miServicio.muestraMensaje('El Paciente: "' + miPaciente.nombre + '" Se ha Agendado.');

    this.pacienteService.agregarPacienteService(miPaciente)
  }

  cuadroNombre: string='';
  cuadroApellido: string='';
  cuadroObraSocial: string='';
  cuadroTurno!: Date;
  cuadroHorario: string='';
  
  volverPacientes() {
    this.router.navigate(['proyectoPaciente']);
  }

}
