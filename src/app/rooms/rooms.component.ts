import { Component } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {

  hotelName = 'Hilton';
  numberOfRooms = 10;
  flag = false;

  increment() {
    this.numberOfRooms++;
  }

  decrement() {
    this.numberOfRooms--;
  }

  toggle() {
    this.flag = !this.flag;
  }

}
