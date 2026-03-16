import { Component } from '@angular/core';
declare const myfun:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrudBasico';
  callfun(){
    myfun();
  }
}
