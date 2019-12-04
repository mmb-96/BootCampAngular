import { Owner } from './owner';


export interface Pet {
    id:number;
    name:string;
    birthDate: string;
    type: Object;
    owner: Owner;
    visits:Object[];
}
