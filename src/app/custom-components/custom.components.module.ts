import { NgModule } from "@angular/core";
import { TableViewComponent } from "./table-view/table-view.component";
import { CommonModule } from "@angular/common";
import { FilterPipe } from "../pipes/filter.pipe";

@NgModule({
declarations:[TableViewComponent,FilterPipe],
imports:[CommonModule],
exports:[TableViewComponent]
})
export class CustomComponentsModule{

}