import { Component, OnInit } from '@angular/core';
import { relacionHuespedActividadesReal } from '../crear-huesped/crear-huesped.component';
import { recordsa } from '../actividades/actividades.component';
import { filteredRecordsx } from '../huesped/huesped.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  // Arreglos de actividades y huéspedes
  relacionHuespedActividadesReal = relacionHuespedActividadesReal;
  recordsa = recordsa;
  filteredRecordsx = filteredRecordsx;

  // Arreglos para actividades frecuentes y filtradas por fecha
  actividadesFrecuentes: any[] = [];
  actividadesFiltradasPorFecha: any[] = [];

  // Fechas de inicio y fin para el filtro
  startDate: Date = new Date();
  endDate: Date = new Date();

  constructor() {}

  ngOnInit(): void {
    this.calcularActividadesFrecuentes();
  }

  // Método para calcular las actividades más frecuentes
  calcularActividadesFrecuentes(): void {
    const conteoActividades: { [id: number]: number } = {};

    // Contamos las actividades basándonos en el arreglo 'relacionHuespedActividadesReal'
    this.relacionHuespedActividadesReal.forEach(rel => {
      if (conteoActividades[rel.disease_guest_id_a]) {
        conteoActividades[rel.disease_guest_id_a]++;
      } else {
        conteoActividades[rel.disease_guest_id_a] = 1;
      }
    });

    // Asignamos las actividades más frecuentes al arreglo 'actividadesFrecuentes'
    this.actividadesFrecuentes = Object.keys(conteoActividades)
      .map(id => ({
        idactividad: Number(id),
        nombre: this.getNombreActividad(Number(id)),
        frecuencia: conteoActividades[Number(id)]
      }))
      .sort((a, b) => b.frecuencia - a.frecuencia);

    // Filtrar actividades por fechas
    this.filtrarActividadesPorFecha();
  }

  // Método para filtrar actividades por fecha
filtrarActividadesPorFecha(): void {
  this.actividadesFiltradasPorFecha = [];

  // Iteramos sobre 'filteredRecordsx' para obtener las actividades dentro del rango de fechas
  this.filteredRecordsx.forEach(record => {
    // Convertimos 'guest_date' a tipo Date (asegurándonos que esté en formato 'YYYY-MM-DD')
    const guestDateString = record.Huesped?.guest_date || '';
    const guestDate = new Date(guestDateString); // Convertimos la cadena en un objeto Date
    
    // Verificamos si la fecha es válida antes de compararla
    if (!isNaN(guestDate.getTime())) {
      // Comprobamos si la fecha está dentro del rango
      if (guestDate >= this.startDate && guestDate <= this.endDate) {
        // Extraemos los IDs de las actividades del campo 'extra_actividades'
        const actividadIds = this.extraerIdsActividades(record.extra_actividades);

        // Contamos la frecuencia de cada actividad dentro de las fechas seleccionadas
        actividadIds.forEach(id => {
          const actividad = this.getNombreActividad(id);
          const existingActivity = this.actividadesFiltradasPorFecha.find(item => item.nombre === actividad);
          if (existingActivity) {
            existingActivity.frecuencia++;
          } else {
            this.actividadesFiltradasPorFecha.push({
              idactividad: id,
              nombre: actividad,
              frecuencia: 1
            });
          }
        });
      }
    } else {
      console.warn(`Fecha inválida para el huésped con ID: ${record.Huesped?.guest_id}`);
    }
  });

  // Ordenamos las actividades filtradas por frecuencia en orden descendente
  this.actividadesFiltradasPorFecha.sort((a, b) => b.frecuencia - a.frecuencia);
}

  // Método para extraer los IDs de las actividades del campo 'extra_actividades'
extraerIdsActividades(extraActividades: string): number[] {
  const ids: number[] = [];
  const regex = /ID:\s*(\d+)/g;
  let match;
  
  // Se asegura de que coincidan todas las ocurrencias de 'ID: <número>'
  while ((match = regex.exec(extraActividades)) !== null) {
    ids.push(Number(match[1]));  // Extraemos solo el número
  }
  
  console.log('IDs de actividades extraídas:', ids);  // Depuración
  return ids;
}


  // Método para obtener el nombre de la actividad a partir de su ID
  getNombreActividad(idactividad: number): string {
    console.log(`Buscando nombre para ID: ${idactividad}`);
    const actividad = this.recordsa.find(act => act.activity_id === idactividad);
    return actividad ? actividad.activity_description : 'Desconocida';
  }


}
