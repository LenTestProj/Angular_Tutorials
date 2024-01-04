import { Component, Input, OnInit,OnChanges, ViewEncapsulation, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
//   encapsulation:ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit,OnChanges {
    @Input('srvElement') element:{type:string, name:string, content:string}={type:'',name:'',content:''};
    @Input() name:string="";
    
    constructor() { 
        console.log("constructor called");
    }

    ngOnChanges(changes:SimpleChanges){
        console.log("ngOnChanges called");
        console.log(changes);
    }

    ngOnInit(): void {
        console.log("ngOnInit called");
    }

}
