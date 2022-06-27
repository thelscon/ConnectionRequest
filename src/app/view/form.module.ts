import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { Form } from "./form.component";

@NgModule ({
    imports : [
        BrowserModule
    ] ,
    declarations : [
        Form
    ] ,
    exports : [
        Form
    ]
})
export class FormModule {}