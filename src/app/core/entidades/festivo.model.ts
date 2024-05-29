import { Tipo } from "./tipo.model";

export class Festivo {
    id:number = 0;
    nombre:string = '';
    dia:number = 0;
    mes:number = 0;
    diasPascua:number = 0;
    idTipo: number = 0;
    tipo: Tipo = new Tipo();
}