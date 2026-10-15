import {Routes,Route,useLocation} from "react-router-dom";import {useEffect} from "react";
import Layout from "./components/Layout";
import {Home,HotelSection,RoomsPage,RoomPage,NotFound} from "./pages/pages";
import {Hotels} from "./pages/compare";import {Experiencias,Ofertas,Eventos,Gastronomia} from "./pages/discover";import {Legal,About} from "./pages/legal";import {Contact} from "./pages/contact";import {HotelPage} from "./pages/hotel";import {Booking,BookingResult} from "./pages/booking";
export default function App(){const {pathname}=useLocation();useEffect(()=>{window.scrollTo(0,0);},[pathname]);
return <Routes><Route element={<Layout/>}>
<Route path="/" element={<Home/>}/><Route path="/hoteis" element={<Hotels/>}/><Route path="/sobre" element={<About/>}/>
<Route path="/hoteis/:slug" element={<HotelPage/>}/><Route path="/hoteis/:slug/quartos" element={<RoomsPage/>}/><Route path="/hoteis/:slug/quartos/:roomSlug" element={<RoomPage/>}/>
{["servicos","gastronomia","eventos","galeria","contactos"].map(s=><Route key={s} path={`/hoteis/:slug/${s}`} element={<HotelSection section={s}/>}/>)}
<Route path="/experiencias" element={<Experiencias/>}/><Route path="/gastronomia" element={<Gastronomia/>}/><Route path="/eventos" element={<Eventos/>}/><Route path="/ofertas" element={<Ofertas/>}/>
<Route path="/contactos" element={<Contact/>}/>
<Route path="/privacidade" element={<Legal t="Política de privacidade"/>}/><Route path="/termos" element={<Legal t="Termos e condições"/>}/><Route path="/cookies" element={<Legal t="Política de cookies"/>}/>
<Route path="/reservar" element={<Booking/>}/><Route path="/reservar/resultado" element={<BookingResult/>}/><Route path="*" element={<NotFound/>}/></Route></Routes>}
