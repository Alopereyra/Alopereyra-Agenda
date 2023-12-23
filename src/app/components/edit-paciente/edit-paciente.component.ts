import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/pacientes.model';
import { ConsulaPacientesService } from 'src/app/service/consulta-pacientes.service';
import { ServicioPacientesService } from 'src/app/service/servicio-pacientes.service';

@Component({
  selector: 'app-edit-paciente',
  templateUrl: './edit-paciente.component.html',
  styleUrls: ['./edit-paciente.component.css']
})
export class EditPacienteComponent implements OnInit{
agregarPaciente() {
throw new Error('Method not implemented.');
}

  constructor (private router:Router, private route:ActivatedRoute, private miServicio:ServicioPacientesService, private pacienteService:ConsulaPacientesService ) {

  }

  ngOnInit(): void {

    this.pacientes=this.pacienteService.pacientes

    this.indice=this.route.snapshot.params['id'];

    let paciente:Paciente=this.pacienteService.encontrarPaciente(this.indice);

    this.cuadroNombre=paciente.nombre, this.cuadroApellido=paciente.apellido, this.cuadroObraSocial=paciente.obraSocial, this.cuadroTurno=paciente.turno, this.cuadroHorario=paciente.horario;
      
  }

  pacientes:Paciente[]=[ ];
  
  indice!:number

  editarPaciente(){
    let miPaciente=new Paciente(
       this.cuadroNombre, this.cuadroApellido, this.cuadroObraSocial, this.cuadroTurno, this.cuadroHorario);
    
       this.miServicio.muestraMensaje('El Paciente: "' + miPaciente.nombre + '" Se ha EDITADO.');

       this.pacienteService.editarPaciente(this.indice, miPaciente)
       
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
