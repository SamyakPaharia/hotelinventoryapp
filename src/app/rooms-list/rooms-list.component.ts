import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomsList } from '../rooms/rooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent {

  @Input() roomList: RoomsList[] = [];

  @Output() roomSelected= new EventEmitter<RoomsList>();

  bookRoom(room: RoomsList) {
    this.roomSelected.emit(room);
  }


}
