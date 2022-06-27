import { Component } from "@angular/core";

import { AllStreets } from "../model/street.data";

@Component ({
    selector : '.form' ,
    templateUrl : 'form.component.html' ,
    styleUrls : [ 'form.component.css' ]
})
export class Form {
    public AllStreets = AllStreets ;
    private _currentStreet : ( number | string ) [] | undefined ;

    get currentStreet () : ( number | string ) [] | undefined {
        return this._currentStreet ;
    }
    set currentStreet ( value : ( number | string ) [] | undefined ) {
        this._currentStreet = value ;
    }

    changeStreetList ( _currentStreet : string ) {
        this.currentStreet = this.AllStreets.find ( findValue => findValue.name.toLowerCase () === _currentStreet.toLowerCase () )?.houseNumber ;
    }
}