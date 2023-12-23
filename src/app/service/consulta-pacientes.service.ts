import { Paciente } from "../pacientes.model";

//Esta es la base de datos de CONSULTA que ya esta PRE ingresada.

export class ConsulaPacientesService { //esta informacion va a ser llamada cuando se la requiera en algun lado.


    pacientes:Paciente[]=[
        new Paciente("Juan","Diaz", "Osde",new Date('2023-12-10'), '12:00'),
        new Paciente("Diego","Maradona", "Afa",new Date('2023-12-11'), '12:30'),
        new Paciente("Rodrigo","Alvarez", "CASA",new Date('2023-12-13'), '13:00'),
        new Paciente("Alverto","Miente", "Ospac",new Date('2023-12-14'), '13:30')
    
    ];

    agregarPacienteService(pacientes:Paciente) {
        this.pacientes.push(pacientes);
    }
    
    encontrarPaciente(indice:number) {
        let paciente:Paciente=this.pacientes[indice];

        return paciente;
    }

    editarPaciente(indice:number, paciente:Paciente) {

        let pacienteEditado=this.pacientes[indice];
    
        pacienteEditado.nombre=paciente.nombre;
        pacienteEditado.apellido=paciente.apellido;
        pacienteEditado.obraSocial=paciente.obraSocial;
        pacienteEditado.turno=paciente.turno;
        pacienteEditado.horario=paciente.horario;
    
    }

}