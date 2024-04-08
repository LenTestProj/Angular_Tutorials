import { animate, group, keyframes, state, style, transition, trigger } from '@angular/animations';
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
        transition('shrunken <=> *',[
            style({
                'backgroundColor':'orange'
            }),
            animate(1000,style({
                borderRadius:'50px'
            })),
            animate(500)
        ])
    ]),
    trigger('list1',[
        state('in',style({
            opacity:1,
            transform:'translateX(0)'
        })),
        transition('void => *',[
            style({
                opacity:0,
                // transform:'translateX(-100px)'
            }),
            animate(700)
        ]),  //void is a state before the element is applied to the DOM,
        transition('* => void',[
            animate(300,style({
                transform:'translateX(100px)',
                opacity:0
            }))
        ]) 
    ]),
    trigger('list2',[
        state('in',style({
            opacity:1,
            transform:'translateX(0)'
        })),
        transition('void => *',[
           animate(1000,keyframes([
            style({
                transform:'translateX(-100px)',
                opacity:0,
                offset:0
            }),
            style({
                transform:'translateX(-50px)',
                opacity:0.5,
                offset:0.3
            }),
            style({
                transform:'translateX(-20px)',
                opacity:1,
                offset:0.8
            }),
            style({
                transform:'translateX(0px)',
                opacity:1,
                offset:1
            })
           ])) 
        ]),  //void is a state before the element is applied to the DOM,
        transition('* => void',[
            group([
                animate(700,style({
                    color:'red'
                })),
                animate(700,style({
                    transform:'translateX(100px)',
                    opacity:0
                })), 
            ])        
        ]) 
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

    animationStarted(event:any){
        console.log(event);
    }

    animationEnded(event:any){
        console.log(event);
    }
}