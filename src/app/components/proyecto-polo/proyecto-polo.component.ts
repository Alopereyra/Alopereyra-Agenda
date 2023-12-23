import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/pacientes.model';
import { ConsulaPacientesService } from 'src/app/service/consulta-pacientes.service';
import { ServicioPacientesService } from 'src/app/service/servicio-pacientes.service';

@Component({
  selector: 'app-proyecto-polo',
  templateUrl: './proyecto-polo.component.html',
  styleUrls: ['./proyecto-polo.component.css']
})
export class ProyectoPoloComponent implements OnInit {
  titulo = 'Proyecto Agenda';

  constructor (private pacienteService:ConsulaPacientesService) {
    
  }

  ngOnInit(): void {
      this.pacientes=this.pacienteService.pacientes
  }
   pacientes:Paciente[]=[ ];

  // agregarPaciente(){
  //   let miPaciente= new Paciente(
  //     this.cuadroNombre, this.cuadroApellido, this.cuadroObraSocial, this.cuadroTurno, this.cuadroHorario);

  //     // this.pacientes.push(miPaciente);
  // }


  // cuadroNombre: string='';
  // cuadroApellido: string='';
  // cuadroObraSocial: string='';
  // cuadroTurno!: Date;
  // cuadroHorario: string='';

  
}
