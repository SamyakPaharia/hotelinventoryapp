import { Component } from '@angular/core';
import { Rooms,RoomsList } from './rooms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {

  hotelName = 'Hilton';
  numberOfRooms = 13;
  hideRooms: boolean = false;
  role: string = 'userssss';

  rooms: Rooms = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20,
  };

  roomList: RoomsList[] = [{
    type: 'Single',
    checkin: new Date(),
    checkout: new Date(),
    ammenties: 'TV, AC, Wifi',
    price: 200,
    location: 'Bangalore'
  },
  {
    type: 'Double',
    checkin: new Date(),
    checkout: new Date(),
    ammenties: 'TV, AC, Wifi',
    price: 100,
    location: 'Bangalore'
  },

  {
    type:'Suite',
    checkin: new Date(),
    checkout: new Date(),
    ammenties: 'TV, AC, Wifi',
    price: 400,
    location: 'Bangalore'
  }
]

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
