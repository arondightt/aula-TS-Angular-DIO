import { Component } from '@angular/core';

@Component({
  selector: 'app-entry-data',
  templateUrl: './entry-data.component.html',
  styleUrls: ['./entry-data.component.css']
})
export class EntryDataComponent {
  placeholder:string = 'email';
  placepass:string = 'password';
  color:string = 'grey';
  fontSize:string = '15px';
}
