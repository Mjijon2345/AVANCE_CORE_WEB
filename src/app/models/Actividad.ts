import { Type } from "./Type";


export class Actividad {
    constructor(
        public  activity_id:  number,
        public  activity_description: number,
        public  activity_duration: string,
        public  activity_notes: string,
        public activity_date:string,
        public activity_state:number,
        public type_activity_id:number,
        public type?: Type
    ) {}
}