import { Component } from "@angular/core";

import { tHouseNumber } from "../model/street.model";
import { AllStreets } from "../model/street.data";

@Component ({
    selector : '.form' ,
    templateUrl : 'form.component.html' ,
    styleUrls : [ 'form.component.css' ]
})
export class Form {
    public AllStreets = AllStreets ;
    private _streetHouseNumbers : tHouseNumber | undefined ;

    get streetHouseNumbers () : tHouseNumber | undefined {
        return this._streetHouseNumbers ;
    }
    set streetHouseNumbers ( value : tHouseNumber | undefined ) {
        this._streetHouseNumbers = value ;
    }

    changeStreetList ( _currentStreet : string ) {
        this.streetHouseNumbers = this.AllStreets.find ( findValue => findValue.name.toLowerCase () === _currentStreet.toLowerCase () )?.houseNumber ;
    }
}