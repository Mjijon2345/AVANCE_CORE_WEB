import { Component, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { Huesped } from 'src/app/models/Huesped';

import { relacionHuespedEnfermedadesReal } from '../crear-huesped/crear-huesped.component'; 


import { relacionHuespedActividadesReal } from '../crear-huesped/crear-huesped.component';  
import { HuespedExtra } from 'src/app/models/HuespedExtra';



export var recordsg: Array<Huesped> = [];
export var filteredRecordsx: Array<HuespedExtra> = [];




@Component({
  selector: 'huesped',
  templateUrl: './huesped.component.html',
  styleUrls: ['./huesped.component.css']
})
export class HuespedComponent implements OnInit {
  public numeroIngresado!: string;
  public textoIngresado!: string;
  public recordsx: Array<Huesped> = [];
  public filteredRecords: Array<Huesped> = [];
  public filteredRecordsx: Array<HuespedExtra> = [];
 
  public estado: boolean = false;
  public isConfirmationDialogOpen: boolean = false;
  public iddelete!: string;
  

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
    console.log(relacionHuespedEnfermedadesReal);
    console.log(relacionHuespedActividadesReal);

    this.getData();
  }

  public getData(): void {
    this.estado = true;
    
    this.recordsx= recordsg;
    this.filteredRecords = this.recordsx;

    

    for (const registro of this.recordsx) {
      const emp = new HuespedExtra(this.getDiseasesById(registro.guest_id), this.getDiseasesById2(registro.guest_id),registro );
      this.filteredRecordsx.push(emp);
    }

  }


  //3333333333333333333333333333333333333333333333333

   getDiseasesById(id: number): string {
    let resultado = '';
    const idModificado = id - 1;
  
    for (const registro of relacionHuespedEnfermedadesReal) {
      if (registro.disease_guest_id_g === idModificado) {
        resultado += `ID: ${registro.disease_guest_id_d}, Nivel: ${registro.disease_guest_level}\n`;
      }
    }
  
    if (resultado === '') {
      resultado = 'No se encontraron registros con ese ID';
    }
  
    return resultado;
  }

  getDiseasesById2(id: number): string {
    let resultado = '';
    const idModificado = id - 1;
  
    for (const registro of relacionHuespedActividadesReal) {
      if (registro.disease_guest_id_g === idModificado) {
        resultado += `ID: ${registro.disease_guest_id_a}`;
      }
    }
  
    if (resultado === '') {
      resultado = 'No se encontraron registros con ese ID';
    }
  
    return resultado;
  }

//3333333333333333333333333333333333333333333333333







  eliminarData(): void {
    this.estado = true;
    console.log("numero:" + this.iddelete);


    let indexx = -1;
    const ide = parseInt(this.iddelete, 10);
    for (let i = 0; i < recordsg.length; i++) {
      if (recordsg[i].guest_id ===ide ) {
        indexx = i;
        break;  // Termina el bucle cuando encuentres el índice
      }
    }
    
            if (indexx !== -1) {
              recordsg.splice(indexx, 1);
              
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
    for (let i = 0; i < recordsg.length; i++) {
      if (recordsg[i].guest_id ===idet ) {
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

    this.router.navigate(['/creaHuesped']); // Ruta definida en el enrutamiento
  }


  public navegarAPagina2(numer: string) {
    const numero = numer;
    this.router.navigate(['/creaHuesped'], { queryParams: { numero } }); // Ruta definida en el enrutamiento
  }



}
