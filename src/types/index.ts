export interface Hotel{slug:string;name:string;stars:number;tagline:string;short:string;full:string;services:string[];restaurants:string[];events:string;theme:string;demo:true}
export interface Room{slug:string;hotel:string;name:string;category:string;maxGuests:number;bed:string;area:number;amenities:string[];price:number;desc:string;demo:true}
export interface Item{title:string;text:string;hotel:string;type:string;benefits:string[];demo:true}
export interface BookingSearch{hotel:string;checkIn:string;checkOut:string;adults:number;children:number;rooms:number}
export interface Guest{firstName:string;lastName:string;email:string;phone:string;country?:string;notes?:string;consent:boolean}
