import { Huesped } from "./Huesped";  


export class HuespedExtra {
    constructor(
       
        public  extra_enfermedades: string,
        public  extra_actividades: string,
        public Huesped?: Huesped,
        
    ) {}
}