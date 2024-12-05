import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import { Familiar } from 'src/app/models/Familiar'; 
import { Persona } from 'src/app/models/Persona';


//nueva
import { recordsr } from "../familiar/familiar.component";



@Component({
  selector: 'app-crear-familiar',
  templateUrl: './crear-familiar.component.html',
  styleUrls: ['./crear-familiar.component.css'],
  template: '<p>El número recibido es: {{ numero }}</p>'
})


export class CrearFamiliarComponent {
  public numero!: string;
  public valorSeleccionadox!: string;
  public bandera = true;
  public empleados: Array<Familiar> = [];
  public seleccionado: string = "";
  public datosAPI: any;
  public perd: Persona = new Persona("0302790555", "MONSALVE", "MONSALVE", "MONSALVE", "MONSALVE", "MONSALVE", "MONSALVE", "MONSALVE", 1, "MONSALVE",);
  public registroID = new Familiar(1, 3, "MONSALVE", this.perd);



  public formattedDate: string = "";
  public solicitud: any;
  public estado: boolean = false;
  public estadon: number = 0;



  constructor(

   
    private router: Router,
    private route: ActivatedRoute,

    ) {
    this.solicitud = {
      relative_id: null,
      relative_guest: null,
      relative_relation: '',
     

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
    this.router.navigate(['/familiar']); // Ruta definida en el enrutamiento
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


        let tamanoLista = recordsr.length;
        const maxId = recordsr.length > 0 ? Math.max(...recordsr.map(record => record.relative_id)) : 0;




      this.registroID = new Familiar( maxId+1,
        this.solicitud.relative_guest,
        this.solicitud.relative_relation,this.perd);
    

      
      
      try {
        recordsr[tamanoLista]=this.registroID;
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

      this.registroID = new Familiar( 
        this.solicitud.relative_id,
        this.solicitud.relative_guest,
        this.solicitud.relative_relation,this.perd);





        
        let indexx = -1;

for (let i = 0; i < recordsr.length; i++) {
  if (recordsr[i].relative_id === this.solicitud.relative_id) {
    indexx = i;
    break;  // Termina el bucle cuando encuentres el índice
  }
}

        if (indexx !== -1) {
          recordsr[indexx] = this.registroID;
          
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

    for (let i = 0; i < recordsr.length; i++) {
      if (recordsr[i].relative_id === idc) {
        indexx = i;
        break;  // Termina el bucle cuando encuentres el índice
      }
    }
    
            if (indexx !== -1) {
              this.registroID= recordsr[indexx];
            } else {
              alert("Error al obtener ese registro !");
            }







   /* this.empleadoService.getEmpleadosID(this.numero).subscribe(
      (data: any) => {
        this.registroID = data.data;*/

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


        this.solicitud.relative_id= this.registroID.relative_id,
      this.solicitud.relative_guest= this.registroID.relative_guest,
        this.solicitud.relative_relation= this.registroID.relative_relation,
       
    



          this.estadon = this.registroID.persona.person_state;
        if (this.registroID.persona.person_state == 1) {
          this.estado = true;
        } else {
          this.estado = false;

        }


  }


}
