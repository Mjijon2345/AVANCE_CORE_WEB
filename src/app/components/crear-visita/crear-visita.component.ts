import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import { Visita } from 'src/app/models/Visita'; 


//nueva
import { recordsv } from '../visita/visita.component';  



@Component({
  selector: 'app-crear-visita',
  templateUrl: './crear-visita.component.html',
  styleUrls: ['./crear-visita.component.css'],
  template: '<p>El número recibido es: {{ numero }}</p>'
})


export class CrearVisitaComponent {
  public numero!: string;
  public valorSeleccionadox!: string;
  public bandera = true;
  public empleados: Array<Visita> = [];
  public seleccionado: string = "";
  public datosAPI: any;
   public registroID = new Visita(1,1,1,1,"MONSALVE", "MONSALVE","MONSALVE", 1);



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
      visit_id: null,
      visit_id_g: null,
      visit_id_r: null,
      visit_id_e: null,
      visit_duration: '',
      visit_date: '',
      visit_hour: '',
      visit_state: null,

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
    this.router.navigate(['/visita']); // Ruta definida en el enrutamiento
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

     


        let tamanoLista = recordsv.length;
        const maxId = recordsv.length > 0 ? Math.max(...recordsv.map(record => record.visit_id)) : 0;




        this.registroID = new Visita( maxId+1,
        this.solicitud.visit_id_g,
        this.solicitud.visit_id_r,
        this.solicitud.visit_id_e,
        this.solicitud.visit_duration,
        this.solicitud.visit_date,
        this.solicitud.visit_hour,
        this.solicitud.visit_state);
    

      
      
      try {
        recordsv[tamanoLista]=this.registroID;
        alert("Registro guardado con exito !");
            this.navegarAPagina();
        
      } catch (error) {
        alert("Error al guardar");
        
      } 


    } else {

      this.registroID = new Visita( 
        this.solicitud.visit_id,
        this.solicitud.visit_id_g,
        this.solicitud.visit_id_r,
        this.solicitud.visit_id_e,
        this.solicitud.visit_duration,
        this.solicitud.visit_date,
        this.solicitud.visit_hour,
        this.solicitud.visit_state);





        
        let indexx = -1;

for (let i = 0; i < recordsv.length; i++) {
  if (recordsv[i].visit_id === this.solicitud.visit_id) {
    indexx = i;
    break;  // Termina el bucle cuando encuentres el índice
  }
}

        if (indexx !== -1) {
          recordsv[indexx] = this.registroID;
          
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

    for (let i = 0; i < recordsv.length; i++) {
      if (recordsv[i].visit_id === idc) {
        indexx = i;
        break;  
      }
    }
    
            if (indexx !== -1) {
              this.registroID= recordsv[indexx];
            } else {
              alert("Error al obtener ese registro !");
            }



        this.solicitud.visit_id= this.registroID.visit_id,

        this.solicitud.visit_id_g= this.registroID.visit_id_g,
        this.solicitud.visit_id_r= this.registroID.visit_id_r,
        this.solicitud.visit_id_e= this.registroID.visit_id_e,
        this.solicitud.visit_duration= this.registroID.visit_duration,
        this.solicitud.visit_date= this.registroID.visit_date,
        this.solicitud.visit_hour= this.registroID.visit_hour,


          this.estadon = this.registroID.visit_state;
        if (this.registroID.visit_state == 1) {
          this.estado = true;
        } else {
          this.estado = false;

        }


  }


}
