import { Observable } from "rxjs";
import { Actividad } from "../models/Actividad";

export interface IActividadService {
  getActivities(page: number): Observable<any>;
  getActivitiesID(id: number): Observable<any>;
  getActivitiesText(text: string, page: number): Observable<any>;
  deleteActivity(id: number): Observable<any>;
  createActivity(actividad: Actividad): Observable<any>;
  updateActivity(id: number, actividad: Actividad): Observable<any>;
}
