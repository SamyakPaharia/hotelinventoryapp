import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Rooms,RoomsList } from './rooms'; 
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from "../rooms-list/rooms-list.component";

@Component({
    selector: 'hinv-rooms',
    standalone: true,
    templateUrl: './rooms.component.html',
    styleUrl: './rooms.component.scss',
    imports: [CommonModule, RoomsListComponent]
})
export class RoomsComponent implements OnInit{


   constructor() { 
    // console.log('RoomsComponent created');
    //Always constructor will be called first
   }

  ngOnInit(): void {
    console.log('RoomsComponent initialized');
    this.numberOfRooms = 3;
  }

  hotelName = 'Hilton';
  numberOfRooms = 13234;
  hideRooms: boolean = false;
  role: string = 'user';
  roombooked: RoomsList | undefined;
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
    location: 'Delhi',
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

  roomBooked(room: RoomsList) {
    this.roombooked = room;
    console.log('Room booked', this.roombooked);
  }

  addRoom() {
    const room1: RoomsList = {
      type: 'Triple',
      checkin: new Date('14-Nov-2020'),
      checkout: new Date('27-Nov-2020'),
      ammenties: 'TV, AC, Wifi, pool, gym, spa',
      price: 200,
      location: 'Mumbai',
      rating: 4.6
    }
    
    // this.roomList.push(room1);  this will not work as it is immutable as per ChangeDetectionStrategy.OnPush
    this.roomList = [...this.roomList, room1];  // this will work
  }

}
