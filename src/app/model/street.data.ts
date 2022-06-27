import { iStreet } from "./street.model";
import { Street } from "./street.model" ;

const StreetMechnikov = new Street (
    'Мечникова' ,
    [ 36 , '36а' , 38 , 40 , 42 , 44 , 46 , 48 , 50 , 52 ,
        54 , 56 , 58 , 60 , 64 , 66 , 68 , 70 , 72 , 74 ,
        '74/1' , '74а' ]
)

const Street10April = new Street (
    '10 Апреля' ,
    [ 2 , 4 , 6 , 8 , 1 , 10 , 12 , 14 , 3 , 16 ,
        18 , 20 , 22 ]
)

const StreetSadikovskaya = new Street (
    'Садиковская' ,
    [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 10 , 12 ,
        16 , 18 , '20а' , '20Б' , 22 , 24 , 26 , 28 , '36а' , 36 ,
        38 , 40 , 42 , 44 ]
)

export const AllStreets : iStreet [] = [ StreetMechnikov , Street10April , StreetSadikovskaya ] ;