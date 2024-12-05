import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import { Enfermedad } from 'src/app/models/Enfermedad';


//nueva
import { recordsd } from '../enfermedad/enfermedad.component';



@Component({
  selector: 'app-crear-enfermedad',
  templateUrl: './crear-enfermedad.component.html',
  styleUrls: ['./crear-enfermedad.component.css'],
  template: '<p>El número recibido es: {{ numero }}</p>'
})


export class CrearEnfermedadComponent {
  public numero!: string;
  public valorSeleccionadox!: string;
  public bandera = true;
  public empleados: Array<Enfermedad> = [];
  public seleccionado: string = "";
  public datosAPI: any;
  public registroID = new Enfermedad(1, 1, "MONSALVE");


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
      disease_id: null,
      activity_id: null,
      disease_name: ''
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
    this.router.navigate(['/enfermedad']); // Ruta definida en el enrutamiento
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




      let tamanoLista = recordsd.length;
      const maxId = recordsd.length > 0 ? Math.max(...recordsd.map(record => record.disease_id)) : 0;




      this.registroID = new Enfermedad(maxId + 1,
        this.solicitud.activity_id,
        this.solicitud.disease_name);




      try {
        recordsd[tamanoLista] = this.registroID;
        alert("Registro guardado con exito !");
        this.navegarAPagina();

      } catch (error) {
        alert("Error al guardar");

      }


    } else {



      this.registroID = new Enfermedad(
        this.solicitud.disease_id,
        this.solicitud.activity_id,
        this.solicitud.disease_name);






      let indexx = -1;

      for (let i = 0; i < recordsd.length; i++) {
        if (recordsd[i].disease_id === this.solicitud.disease_id) {
          indexx = i;
          break;  // Termina el bucle cuando encuentres el índice
        }
      }

      if (indexx !== -1) {
        recordsd[indexx] = this.registroID;

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

    for (let i = 0; i < recordsd.length; i++) {
      if (recordsd[i].disease_id === idc) {
        indexx = i;
        break;
      }
    }

    if (indexx !== -1) {
      this.registroID = recordsd[indexx];
    } else {
      alert("Error al obtener ese registro !");
    }





    this.solicitud.disease_id = this.registroID.disease_id,
    this.solicitud.activity_id = this.registroID.activity_id,
    this.solicitud.disease_name = this.registroID.disease_name,
    



        
    this.estadon = 1;
    if (1 == 1) {
      this.estado = true;
    } else {
      this.estado = false;

    }

  }


}
