
export class Visita {
    constructor(
        public visit_id:number,
        public visit_id_g:number,
        public visit_id_r:number,
        public visit_id_e:number,
        public visit_duration: string,
        public visit_date: string,
        public visit_hour: string,
        public visit_state: number
    ) { }
}