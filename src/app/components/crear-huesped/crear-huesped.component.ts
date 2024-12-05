import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import { Huesped } from 'src/app/models/Huesped';
import { Persona } from 'src/app/models/Persona';


//nueva
import { recordsg } from "../huesped/huesped.component";
import { recordsd } from '../enfermedad/enfermedad.component';   
import { recordsa } from '../actividades/actividades.component';  
import { HuespedEnfermedad } from 'src/app/models/HuespedEnfermedad';
import { Enfermedad } from 'src/app/models/Enfermedad';
import { Actividades } from 'src/app/models/Actividades';
import { HuespedActividades } from 'src/app/models/HuespedActividades';




export var relacionHuespedEnfermedadesReal: Array<HuespedEnfermedad> = [];
export var relacionHuespedActividadesReal: Array<HuespedActividades> = [];


@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-huesped.component.html',
  styleUrls: ['./crear-huesped.component.css'],
  template: '<p>El número recibido es: {{ numero }}</p>'
})


export class CrearHuespedComponent {


  public relacionHuespedEnfermedades: Array<Enfermedad> = [];
  public relacionHuespedActividades: Array<Actividades> = [];
  //public relacionHuespedEnfermedadesReal: Array<HuespedEnfermedad> = [];
  //public relacionHuespedActividadesReal: Array<HuespedActividades> = [];

  public recordsd = recordsd;
  public recordsa = recordsa;
  public level = 1;

  public selectedEnfermedad: string = ''; // Controla el valor seleccionado del combo de enfermedades
  public selectedActividad: string = ''; // Controla el valor seleccionado del combo de actividades





  
  public numero!: string;
  public valorSeleccionadox!: string;
  public bandera = true;
  public huespedess: Array<Huesped> = [];
  public seleccionado: string = "";
  public datosAPI: any;
  public perd: Persona = new Persona("0302790555", "MONSALVE", "MONSALVE", "MONSALVE", "MONSALVE", "MONSALVE", "MONSALVE", "MONSALVE", 1, "MONSALVE",);
  public registroID = new Huesped(1,"MONSALVE", "MONSALVE",  this.perd);


  // @Input() public medicina: Medicina = new Medicina(1,"", 3,5,5, "se");


  public formattedDate: string = "";
  public solicitud: any;
  public estado: boolean = false;
  public estadon: number = 0;



  constructor(

    // private medicinaService: MedicinaService,
    private router: Router,
    private route: ActivatedRoute,

    ) {
    this.solicitud = {
      guest_id: null,
      guest_history: '',
      guest_date: '',
      person_document: '',
      person_first_name: '',
      person_middle_name: '',
      person_last_name: '',
      person_second_surname: '',
      person_direction: '',
      person_phone: '',
      person_mobile: '',
      person_state: null,
      person_notes: '',

    }

  }






 // Método para guardar la relación de enfermedades
 guardarRelacionEnfermedades(event: any): void {
  const seleccionId = +event.target.value;
  const enfermedadSeleccionada = this.recordsd.find(record => record.disease_id === seleccionId);

  if (enfermedadSeleccionada) {
    const yaExiste = this.relacionHuespedEnfermedades.some(rel => rel.disease_id === seleccionId);
    if (!yaExiste) {

      const maxIdd = recordsg.length > 0 ? Math.max(...recordsg.map(record => record.guest_id)) : 0;
      const rher = new HuespedEnfermedad(maxIdd,enfermedadSeleccionada.disease_id,this.level);
      relacionHuespedEnfermedadesReal.push(rher);


      this.relacionHuespedEnfermedades.push(enfermedadSeleccionada);

      // Filtrar actividades prohibidas
      if (enfermedadSeleccionada.activity_id) {
        this.recordsa = this.recordsa.filter(
          actividad => actividad.activity_id !== enfermedadSeleccionada.activity_id
        );
      }
    }
  }

  // Reiniciar el valor seleccionado
  this.selectedEnfermedad = '';
}

// Método para guardar la relación de actividades
guardarRelacionActividades(event: any): void {
  const seleccionId = +event.target.value;
  const actividadSeleccionada = this.recordsa.find(record => record.activity_id === seleccionId);

  if (actividadSeleccionada) {

    const maxIddd = recordsg.length > 0 ? Math.max(...recordsg.map(record => record.guest_id)) : 0;
      const rherr = new HuespedActividades(maxIddd,actividadSeleccionada.activity_id);
      relacionHuespedActividadesReal.push(rherr);


    const yaExiste = this.relacionHuespedActividades.some(rel => rel.activity_id === seleccionId);
    if (!yaExiste) {
      this.relacionHuespedActividades.push(actividadSeleccionada);
    }
  }

  // Reiniciar el valor seleccionado
  this.selectedActividad = '';
}

// Método para eliminar una enfermedad de las relaciones
eliminarRelacionEnfermedad(enfermedad: any): void {
  
  relacionHuespedEnfermedadesReal = relacionHuespedEnfermedadesReal.filter(
    rel => rel.disease_guest_id_d !== enfermedad.disease_id
  );

  this.relacionHuespedEnfermedades = this.relacionHuespedEnfermedades.filter(
    rel => rel.disease_id !== enfermedad.disease_id
  );

  // Restaurar la actividad relacionada si se eliminó la enfermedad
  if (enfermedad.activity_id) {
    const actividadEliminada = recordsa.find(record => record.activity_id === enfermedad.activity_id);
    if (actividadEliminada) {
      this.recordsa.push(actividadEliminada);
      this.recordsa.sort((a, b) => a.activity_id - b.activity_id); // Ordenar por ID para mantener el orden
    }
  }
}

// Método para eliminar una actividad de las relaciones
eliminarRelacionActividad(actividad: any): void {


  relacionHuespedActividadesReal = relacionHuespedActividadesReal.filter(
    rel => rel.disease_guest_id_a !== actividad.activity_id
  );


  this.relacionHuespedActividades = this.relacionHuespedActividades.filter(
    rel => rel.activity_id !== actividad.activity_id
  );
}








  seleccionarOpcion() {
    if (this.estadon == 1) {
      this.estadon = 0;
      this.estado = false;
    } else {
      this.estadon = 1;
      this.estado = true;
    }
    //console.log("valor estadon: " + this.estadon);

  }

  public lleno(): string {
    return this.solicitud.nombre;
  }

  public onSumbmit(): void {


    this.getData();


  }

  navegarAPagina() {
    this.router.navigate(['/huesped']); // Ruta definida en el enrutamiento
  }


  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      if (params && params['numero']) {
        this.numero = params['numero'];
        this.onSumbmitID();
      }
    });
  }










  getData(): void {

    if (this.bandera) {

      this.perd= new Persona(
        this.solicitud.person_document,
        this.solicitud.person_first_name,
        this.solicitud.person_middle_name,
        this.solicitud.person_last_name,
        this.solicitud.person_second_surname,
        this.solicitud.person_direction,
        this.solicitud.person_phone,
        this.solicitud.person_mobile,
        this.estadon,
        this.solicitud.person_notes);


        let tamanoLista = recordsg.length;
        const maxId = recordsg.length > 0 ? Math.max(...recordsg.map(record => record.guest_id)) : 0;



      this.registroID = new Huesped( maxId+1,
        this.solicitud.guest_history,
        this.solicitud.guest_date,this.perd);
    

      
      
      try {

        

        recordsg[tamanoLista]=this.registroID;
        alert("Registro guardado con exito !");
            this.navegarAPagina();
        
      } catch (error) {
        alert("Error al guardar");
        
      } 


    } else {

      this.perd= new Persona(
        this.solicitud.person_document,
        this.solicitud.person_first_name,
        this.solicitud.person_middle_name,
        this.solicitud.person_last_name,
        this.solicitud.person_second_surname,
        this.solicitud.person_direction,
        this.solicitud.person_phone,
        this.solicitud.person_mobile,
        this.estadon,
        this.solicitud.person_notes);

      this.registroID = new Huesped( 
        this.solicitud.guest_id,
        this.solicitud.guest_history,
        this.solicitud.guest_date,
        this.perd);





        
        let indexx = -1;

for (let i = 0; i < recordsg.length; i++) {
  if (recordsg[i].guest_id === this.solicitud.guest_id) {
    indexx = i;
    break;  // Termina el bucle cuando encuentres el índice
  }
}

        if (indexx !== -1) {
          recordsg[indexx] = this.registroID;
          
          alert("Registro actualizado con exito !");
          this.navegarAPagina();
        } else {
          alert("Registro no actualizado con exito !");
        }

    }

  }




  public onSumbmitID(): void {
    this.estado = false;
    this.bandera = false;

    console.log("numero: ", this.numero);



    let indexx = -1;
    const idc = parseInt(this.numero, 10);

    for (let i = 0; i < recordsg.length; i++) {
      if (recordsg[i].guest_id === idc) {
        indexx = i;
        break;  // Termina el bucle cuando encuentres el índice
      }
    }
    
            if (indexx !== -1) {
              this.registroID= recordsg[indexx];
            } else {
              alert("Error al obtener ese registro !");
            }

            const numerou: number = parseInt(this.numero, 10);

            relacionHuespedEnfermedadesReal = relacionHuespedEnfermedadesReal.filter(
              rel => rel.disease_guest_id_d !== numerou
            );

            relacionHuespedActividadesReal = relacionHuespedActividadesReal.filter(
              rel => rel.disease_guest_id_a !== numerou
            );




        this.solicitud.person_document= this.registroID.persona.person_document,

        this.solicitud.person_first_name= this.registroID.persona.person_first_name,
        this.solicitud.person_middle_name= this.registroID.persona.person_middle_name,
        this.solicitud.person_last_name= this.registroID.persona.person_last_name,
        this.solicitud.person_second_surname= this.registroID.persona.person_second_surname,
        this.solicitud.person_direction= this.registroID.persona.person_direction,
        this.solicitud.person_phone= this.registroID.persona.person_phone,
        this.solicitud.person_mobile= this.registroID.persona.person_mobile,
        this.estadon= this.registroID.persona.person_state,
        this.solicitud.person_notes= this.registroID.persona.person_notes,


        this.solicitud.guest_id= this.registroID.guest_id,
      this.solicitud.guest_history= this.registroID.guest_history,
        this.solicitud.guest_date= this.registroID.guest_date,
       


          this.estadon = this.registroID.persona.person_state;
        if (this.registroID.persona.person_state == 1) {
          this.estado = true;
        } else {
          this.estado = false;

        }


  }


}
