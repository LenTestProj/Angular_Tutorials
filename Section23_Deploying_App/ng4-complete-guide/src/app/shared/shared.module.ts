import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { LoadingSpinner } from "./loading-Spinner/loading-spinner";
import { PlaceHolderDirective } from "./placeholder/placeholder.directive";
import { DropDownDirective } from "./dropdown.directive";
import { CommonModule } from "@angular/common";
import { LoggingService } from "../logging.service";

@NgModule({
    declarations:[
        AlertComponent,
        LoadingSpinner,
        PlaceHolderDirective,
        DropDownDirective
    ],
    // imports:[
    //     CommonModule
    // ],
    exports:[
        AlertComponent,
        LoadingSpinner,
        PlaceHolderDirective,
        DropDownDirective,
        CommonModule
    ],
    providers:[LoggingService]
})

export class SharedModule{}