
export class Paciente {

    constructor(nombre:string, apellido:string, obraSocial:string, turno:Date, horario:string ) {
        this.nombre=nombre;
        this.apellido=apellido;
        this.obraSocial=obraSocial;
        this.turno=turno;
        this.horario=horario;
    }

    nombre:string="";
    apellido:string="";
    obraSocial:string="";
    turno: Date;
    horario: string='';

     
}

