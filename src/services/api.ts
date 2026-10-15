import {rooms} from "../data/content";import type {BookingSearch} from "../types";
// Contrato local: substituir por chamadas HTTP quando existir API.
export const api={rooms:(hotel?:string)=>rooms.filter(r=>!hotel||hotel==="todas"||r.hotel===hotel),room:(h:string,s:string)=>rooms.find(r=>r.hotel===h&&r.slug===s),
search:(s:BookingSearch)=>rooms.filter(r=>(s.hotel==="todas"||r.hotel===s.hotel)&&r.maxGuests*s.rooms>=s.adults+s.children)};
export const newRef=()=>"DEMO-"+Math.random().toString(36).slice(2,8).toUpperCase();
