import { Organisateur } from "./organisateur";
import { Partenaire } from "./partenaire";

export class Evenement {
    constructor(
        public id:number,
        public image:string,
        public nom:string,
        public lieu:string,
        public date:Date,
        public description:string,
        public partenaire:Partenaire[],
        public organisateur:Organisateur[]

    ){
    }
}
