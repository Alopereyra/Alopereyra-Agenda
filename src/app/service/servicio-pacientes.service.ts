import { Injectable } from '@angular/core';
import { Paciente } from '../pacientes.model';


//Aqui podemos poner informacion para usarla en otros modulos o informacion que se va a usar en BD

@Injectable({
  providedIn: 'root'
})
export class ServicioPacientesService {
  
  constructor() { }

  muestraMensaje(mensaje:string){
    alert(mensaje);
    
  }

 

}
