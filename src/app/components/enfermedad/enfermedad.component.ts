import { Component, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { Enfermedad } from 'src/app/models/Enfermedad';


export var recordsd: Array<Enfermedad> = [];


@Component({
  selector: 'enfermedad',
  templateUrl: './enfermedad.component.html',
  styleUrls: ['./enfermedad.component.css']
})
export class EnfermedadComponent implements OnInit {
  public numeroIngresado!: string;
  public textoIngresado!: string;
  public recordsx: Array<Enfermedad> = [];
  public filteredRecords: Array<Enfermedad> = [];
 
  public estado: boolean = false;
  public isConfirmationDialogOpen: boolean = false;
  public iddelete!: string;
  //public perd: Persona = new Persona("0343046346346", "MONSALVE", "MONSALVE", "MONSALVE", "MONSALVE", "MONSALVE", "MONSALVE", "MONSALVE", 1, "MONSALVE",);
  //public emp = new Empleado(1,"MONSALVE", "MONSALVE", 3, "MONSALVE", "MONSALVE", this.perd);


  openConfirmationDialog(idnumero: string) {
    this.iddelete = idnumero;
    this.isConfirmationDialogOpen = true;
    console.log("diss:" + this.iddelete);
  }

  closeConfirmationDialog() {
    this.isConfirmationDialogOpen = false;

  }

  confirmDeletion() {
    this.eliminarData();
    this.closeConfirmationDialog();

  }



  errorMensaje: string = "";

  currentPage = 1;
  lastPage = 1;



  constructor(
    private router: Router

  ) {



  }


  ngOnInit(): void {
    this.getData();
  }

  public getData(): void {
    this.estado = true;
    
    this.recordsx= recordsd;
    this.filteredRecords = this.recordsx;

  }


  eliminarData(): void {
    this.estado = true;
    console.log("numero:" + this.iddelete);


    let indexx = -1;
    const ide = parseInt(this.iddelete, 10);
    for (let i = 0; i < recordsd.length; i++) {
      if (recordsd[i].disease_id ===ide ) {
        indexx = i;
        break;  // Termina el bucle cuando encuentres el índice
      }
    }
    
            if (indexx !== -1) {
              recordsd.splice(indexx, 1);
              
              alert("Registro eliminado con exito !");
            } else {
              alert("Registro no eliminado  !");
            }



  }








  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getData();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.lastPage) {
      this.currentPage++;

      this.getData();

    }
  }



  public onSumbmitID(): void {
    this.estado = false;
    console.log("diss:" + this.numeroIngresado);
    let indexx = -1;
    const idet = parseInt(this.numeroIngresado, 10);
    for (let i = 0; i < recordsd.length; i++) {
      if (recordsd[i].disease_id ===idet ) {
        indexx = i;
        break;  // Termina el bucle cuando encuentres el índice
      }
    }
    
            if (indexx !== -1) {
              this.filteredRecords = [this.recordsx[indexx]];

              //records[indexx].employee_id
              
              
            } else {
              alert("Registro no encontrado !");
            }









  }





  public navegarAPagina() {

    this.router.navigate(['/creaEnfermedad']); // Ruta definida en el enrutamiento
  }


  public navegarAPagina2(numer: string) {
    const numero = numer;
    this.router.navigate(['/creaEnfermedad'], { queryParams: { numero } }); // Ruta definida en el enrutamiento
  }



}
