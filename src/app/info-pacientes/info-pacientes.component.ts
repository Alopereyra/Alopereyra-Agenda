import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Paciente } from '../pacientes.model';

@Component({
  selector: 'app-info-pacientes',
  templateUrl: './info-pacientes.component.html',
  styleUrls: ['./info-pacientes.component.css']
})
export class InfoPacientesComponent implements OnInit{
  
   
  @Input() pacienteInfo:Paciente | undefined;
  @Input() indice!: number;
  @Output() modelosPaciente = new EventEmitter<string>(); 
  constructor() {}

  ngOnInit(): void {
      
  }

  arrayModelPaciente = [''];

  agregaModelos(nuevoModelo: string) {
    this.arrayModelPaciente.push(nuevoModelo); 
  }

}

