import {createContext,useContext,useState,ReactNode} from "react";
const K="gs-hotel",OK=["costa-hotel-i","costa-hotel-ii","cosvita"];type C={hotel:string|null;setHotel:(s:string|null)=>void};
const Ctx=createContext<C>({hotel:null,setHotel:()=>{}});
export const HotelProvider=({children}:{children:ReactNode})=>{const [hotel,set]=useState<string|null>(()=>{try{const v=localStorage.getItem(K);return v&&OK.includes(v)?v:null}catch{return null}});
const setHotel=(s:string|null)=>{set(s);try{s?localStorage.setItem(K,s):localStorage.removeItem(K)}catch{}};return <Ctx.Provider value={{hotel,setHotel}}>{children}</Ctx.Provider>};
export const useHotelCtx=()=>useContext(Ctx);
