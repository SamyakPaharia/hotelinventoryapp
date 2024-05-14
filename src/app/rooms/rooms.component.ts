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
  role: string = 'user';

  rooms: Rooms = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20,
  };

  roomList: RoomsList[] = [{
    type: 'Single',
    checkin: new Date('11-Nov-2020'),
    checkout: new Date('20-Nov-2020'),
    ammenties: 'TV, AC, Wifi',
    price: 200,
    location: 'Bangalore',
    rating: 4.4789
  },
  {
    type: 'Double',
    checkin: new Date('21-Nov-2020'),
    checkout: new Date('30-Nov-2020'),
    ammenties: 'TV, AC, Wifi',
    price: 100,
    location: 'Bangalore',
    rating: 3.345
  },

  {
    type:'Suite',
    checkin: new Date('21-Dec-2020'),
    checkout: new Date('01-Jan-2021'),
    ammenties: 'TV, AC, Wifi, pool, gym, spa',
    price: 400,
    location: 'Bangalore',
    rating: 4.8
  }
]

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
