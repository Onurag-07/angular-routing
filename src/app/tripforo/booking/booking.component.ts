import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  count = 0;
  counter(type:string){
    type==='add'?this.count++:this.count--
  }
  isDisplay = true;
  toggleDisplay(){
    this.isDisplay = !this.isDisplay;
  }
  //  const number = document.getElementById('number');
   

}
