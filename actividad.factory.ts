import { Actividad } from 'src/app/models/Actividad';
import { Type } from 'src/app/models/Type';

export class ActividadFactory {
  static crearActividad(id: number, typeId: number, nombre: string, descripcion: string): Actividad {
    return new Actividad(id, typeId, nombre, descripcion, new Date().toString(), 0, '', new Type(typeId, '', 0, ''));
  }
}
