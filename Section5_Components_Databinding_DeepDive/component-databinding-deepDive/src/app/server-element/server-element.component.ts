import { Component, Input, OnInit,OnChanges, ViewEncapsulation, SimpleChange, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy, ViewChild, ElementRef, AfterViewInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
//   encapsulation:ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,OnDestroy,AfterViewInit {
    @Input('srvElement') element:{type:string, name:string, content:string}={type:'',name:'',content:''};
    @Input() name:string="";
    @ViewChild('heading') header:any;
    @ContentChild('contentParagraph') paragraph:any;
    constructor() { 
        console.log("constructor called");
    }
    ngAfterViewInit(): void {
        console.log("ng After view init called");
        console.log('header text: ',this.header.nativeElement.textContent);
    }
    ngOnDestroy(): void {
        console.log("ng on Destroy called")
    }
    ngAfterContentChecked(): void {
        console.log("ng after content checked called") //called after change detection cycle. called after ngDoCheck in this case
    }
    ngAfterContentInit(): void {
        console.log("ng after content Init called")  //function called only once
        console.log('Text Content Paragraph - ',this.paragraph.nativeElement.textContent);
    }
    ngDoCheck(): void {
        console.log("ngDoCheck called")
    }

    ngOnChanges(changes:SimpleChanges){
        console.log("ngOnChanges called");
        console.log(changes);
    }

    ngOnInit(): void {
        console.log("ngOnInit called");
        // console.log('header text: ',this.header.nativeElement.textContent);
    }

}
