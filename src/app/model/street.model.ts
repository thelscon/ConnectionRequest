export interface iStreet {
    name : string ,
    houseNumber : ( number | string ) [] ;
}

export class Street implements iStreet {
    constructor (
        public name : string ,
        public houseNumber : ( number | string ) []
    ) {}
}