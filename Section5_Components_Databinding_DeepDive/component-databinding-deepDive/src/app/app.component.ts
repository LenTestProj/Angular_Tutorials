import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
    serverElements:any = [{type:'server',name:'TestServer',content:"Just a test!"}];

    onServerAdded() {
        // this.serverElements.push({
        // type: 'server',
        // name: this.newServerName,
        // content: this.newServerContent
        // });
    }

    onBlueprintAdded() {
        // this.serverElements.push({
        // type: 'blueprint',
        // name: this.newServerName,
        // content: this.newServerContent
        // });
    }

}
