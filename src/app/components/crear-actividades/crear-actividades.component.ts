import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import { Actividades } from 'src/app/models/Actividades';  


//nueva
import { recordsa } from '../actividades/actividades.component';  



@Component({
  selector: 'app-crear-actividades',
  templateUrl: './crear-actividades.component.html',
  styleUrls: ['./crear-actividades.component.css'],
  template: '<p>El número recibido es: {{ numero }}</p>'
})


export class CrearActividadesComponent {
  public numero!: string;
  public valorSeleccionadox!: string;
  public bandera = true;
  public empleados: Array<Actividades> = [];
  public seleccionado: string = "";
  public datosAPI: any;
   public registroID = new Actividades(1,"","MONSALVE","MONSALVE");



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
      activity_id: null,
      activity_description: null,
      activity_duration: ' ',
      activity_notes: ' ',

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
    this.router.navigate(['/actividades']); // Ruta definida en el enrutamiento
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

     


        let tamanoLista = recordsa.length;
        const maxId = recordsa.length > 0 ? Math.max(...recordsa.map(record => record.activity_id)) : 0;




        this.registroID = new Actividades( maxId+1,
        this.solicitud.activity_description,
        this.solicitud.activity_duration,
        this.solicitud.activity_notes,);
    

      
      
      try {
        recordsa[tamanoLista]=this.registroID;
        alert("Registro guardado con exito !");
            this.navegarAPagina();
        
      } catch (error) {
        alert("Error al guardar");
        
      } 


    } else {

      this.registroID = new Actividades( 
        this.solicitud.activity_id,
        this.solicitud.activity_description,
        this.solicitud.activity_duration,
        this.solicitud.activity_notes,);





        
        let indexx = -1;

for (let i = 0; i < recordsa.length; i++) {
  if (recordsa[i].activity_id === this.solicitud.activity_id) {
    indexx = i;
    break;  // Termina el bucle cuando encuentres el índice
  }
}

        if (indexx !== -1) {
          recordsa[indexx] = this.registroID;
          
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

    for (let i = 0; i < recordsa.length; i++) {
      if (recordsa[i].activity_id === idc) {
        indexx = i;
        break;  
      }
    }
    
            if (indexx !== -1) {
              this.registroID= recordsa[indexx];
            } else {
              alert("Error al obtener ese registro !");
            }



        this.solicitud.activity_id= this.registroID.activity_id,

        this.solicitud.activity_description= this.registroID.activity_description,
        this.solicitud.activity_duration= this.registroID.activity_duration,
        this.solicitud.activity_notes= this.registroID.activity_notes,


          this.estadon = 1;
        if (this.registroID.activity_id == 1) {
          this.estado = true;
        } else {
          this.estado = false;

        }


  }


}
