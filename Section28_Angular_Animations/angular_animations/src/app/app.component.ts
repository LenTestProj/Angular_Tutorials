import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations:[
    trigger('divState',[
        state('normal',style({
            backgroundColor:'red',
            transform:'translateX(0)'
        })),
        state('highlighted',style({
            'background-color':'blue',
            transform:'translateX(100px)'
        })),
        transition('normal <=> highlighted',animate(700))
        // transition('highlighted => normal',animate(300))
    ]),
    trigger('wildState',[
        state('normal',style({
            backgroundColor:'red',
            transform:'translateX(0) scale(1)'
        })),
        state('highlighted',style({
            'background-color':'blue',
            transform:'translateX(100px) scale(1)'
        })),
        state('shrunken',style({
            'background-color':'green',
            transform:'translateX(0) scale(0.5)'

        })),
        transition('normal => highlighted',animate(300)),
        transition('normal => highlighted',animate(800)),
        transition('shrunken <=> *',animate(500))
    ])
  ]
})
export class AppComponent {
    state="normal";
    wildState='normal';
    list:String[] = ['Milk', 'Sugar', 'Bread'];

    onAnimate(){
        this.state==='normal'?this.state='highlighted':this.state='normal';
        this.wildState==='normal'?this.wildState='highlighted':this.wildState='normal';
    }

    onShrink(){
        this.wildState='shrunken';
    }

    onAdd(item:String) {
      this.list.push(item);
    }

    onDelete(item:String){
        this.list.splice(this.list.indexOf(item),1);
    }
}
