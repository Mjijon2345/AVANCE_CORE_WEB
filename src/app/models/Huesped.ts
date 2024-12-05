import { Persona } from "./Persona";

export class Huesped {
    constructor(
        public guest_id:number,
        public guest_history: string,
        public guest_date: string,
        public persona: Persona
    ) { }
}