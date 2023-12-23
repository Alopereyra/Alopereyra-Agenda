import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioPacientesService } from '../service/servicio-pacientes.service';


@Component({
  selector: 'app-modelo-paciente',
  templateUrl: './modelo-paciente.component.html',
  styleUrls: ['./modelo-paciente.component.css']
})
export class ModeloPacienteComponent implements OnInit{

  @Output() modelosPaciente = new EventEmitter<string>();

    
  constructor (private miServicio:ServicioPacientesService) { }

  ngOnInit(): void {
  
  }

  agregaModelos(value:string) {
    this.miServicio.muestraMensaje('Diagnostico Ingresado')
    this.modelosPaciente.emit(value)
  } 
}
