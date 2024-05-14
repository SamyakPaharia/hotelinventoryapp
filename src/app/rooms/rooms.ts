export interface Rooms {

    availableRooms: number;
    bookedRooms: number;
    totalRooms: number;


}

export interface RoomsList
{
    type: string;
    checkin:Date;
    checkout:Date;
    ammenties: string;
    price: number;
    location: string;
    rating : number;
}