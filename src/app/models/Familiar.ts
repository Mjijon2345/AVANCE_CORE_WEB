import { Persona } from "./Persona";

export class Familiar {
    constructor(
        public relative_id:number,
        public relative_guest:number,
        public relative_relation: string,
        public persona: Persona
    ) { }
}