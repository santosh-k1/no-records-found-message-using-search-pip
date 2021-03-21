import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = '';

  items = [
    {name:'name01'},
    {name:'name02'},
    {name:'name03'},
    {name:'name04'},
  ]
}
